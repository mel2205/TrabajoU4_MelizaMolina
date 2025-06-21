import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

interface Medicamento {
  nombre: string;
  hora: string;
  detalle: string;
  estado: 'pendiente' | 'tomado' | 'perdido';
  instrucciones?: string[];
}

@Component({
  selector: 'app-mis-medicinas',
  templateUrl: './mis-medicinas.page.html',
  styleUrls: ['./mis-medicinas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MisMedicinasPage implements OnInit {
  listaMedicamentos: Medicamento[] = [
    {
      nombre: 'Metformina 850mg',
      hora: '14:00',
      detalle: '1 pastilla con almuerzo',
      estado: 'pendiente',
      instrucciones: [
        'Tomar con un vaso de agua',
        'Durante o después del almuerzo',
        'Confirmar la toma en la app'
      ]
    },
    {
      nombre: 'Enalapril 10mg',
      hora: '8:00',
      detalle: '1 pastilla en ayunas',
      estado: 'tomado'
    }
  ];

  get proximaMedicina() {
    return this.listaMedicamentos.find(med => med.estado === 'pendiente');
  }

  nuevaMedicina: any = {
    nombre: '',
    hora: '',
    detalle: '',
    instruccionesTexto: ''
  };

  constructor(private navCtrl: NavController) {}

  async ngOnInit() {
    // Solicita permisos al iniciar la app
    await LocalNotifications.requestPermissions();

    // Crea el canal en Android
    if (Capacitor.getPlatform() === 'android') {
      await LocalNotifications.createChannel({
        id: 'medicinas',
        name: 'Recordatorios de Medicinas',
        description: 'Canal para notificaciones de medicinas',
        importance: 5,
        visibility: 1
      });
    }

    // Carga medicamentos guardados
    const meds = localStorage.getItem('medicamentos');
    if (meds) {
      this.listaMedicamentos = JSON.parse(meds);
    }
  }

  irAHome() {
    this.navCtrl.navigateRoot('/home');
  }

  confirmarToma(med: Medicamento) {
    med.estado = 'tomado';
    localStorage.setItem('medicamentos', JSON.stringify(this.listaMedicamentos));
  }

  marcarPerdido(med: Medicamento) {
    med.estado = 'perdido';
    localStorage.setItem('medicamentos', JSON.stringify(this.listaMedicamentos));
  }

  restaurarPendiente(med: Medicamento) {
    med.estado = 'pendiente';
    localStorage.setItem('medicamentos', JSON.stringify(this.listaMedicamentos));
  }

  async agregarMedicina() {
    const instrucciones = this.nuevaMedicina.instruccionesTexto
      ? this.nuevaMedicina.instruccionesTexto.split('\n').filter((i: string) => i.trim())
      : [];

    const nueva: Medicamento = {
      nombre: this.nuevaMedicina.nombre,
      hora: this.nuevaMedicina.hora,
      detalle: this.nuevaMedicina.detalle,
      estado: 'pendiente',
      instrucciones: instrucciones.length ? instrucciones : undefined
    };

    this.listaMedicamentos.push(nueva);
    localStorage.setItem('medicamentos', JSON.stringify(this.listaMedicamentos));
    this.nuevaMedicina = { nombre: '', hora: '', detalle: '', instruccionesTexto: '' };
    await this.programarNotificacion(nueva);
  }

  async programarNotificacion(med: Medicamento) {
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted') {
      alert('Permiso de notificaciones denegado.');
      return;
    }

    const ahora = new Date();
    const [hora, minuto] = med.hora.split(':').map(Number);
    const notiFecha = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), hora, minuto);

    if (notiFecha < ahora) {
      notiFecha.setDate(notiFecha.getDate() + 1);
    }

    await LocalNotifications.schedule({
      notifications: [{
        title: 'Hora de tu medicina',
        body: `${med.nombre} (${med.detalle})`,
        id: Date.now(),
        schedule: { at: notiFecha },
        channelId: 'medicinas' // Siempre lo puedes poner, no afecta en iOS
      }]
    });
  }

  // FUNCIONES DE PRUEBA

  async testNotificacion() {
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted') {
      alert('Permiso denegado');
      return;
    }

    const ahora = new Date();
    ahora.setSeconds(ahora.getSeconds() + 10);

    await LocalNotifications.schedule({
      notifications: [{
        title: '¡Test!',
        body: 'Esto es una notificación de prueba.',
        id: Date.now(),
        schedule: { at: ahora },
        channelId: 'medicinas'
      }]
    });

    alert('Notificación programada para 10 segundos.');
  }
}
