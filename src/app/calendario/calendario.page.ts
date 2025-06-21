import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CalendarioPage implements OnInit {
  
  fechaSeleccionada: string = '';
  eventos: string[] = [];

  constructor(private navCtrl: NavController) {}

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async agendarEvento() {
    if (this.fechaSeleccionada && !this.eventos.includes(this.fechaSeleccionada)) {
      this.eventos.push(this.fechaSeleccionada);

      // Para pruebas: notificación en 2 minutos desde ahora
      const date = new Date();
      date.setMinutes(date.getMinutes() + 2);

      await LocalNotifications.schedule({
        notifications: [
          {
            title: '¡Tienes un evento agendado!',
            body: 'Esta es una notificación de prueba. 😊',
            id: Date.now(),
            schedule: { at: date },
            actionTypeId: '',
            extra: null
          }
        ]
      });

      this.fechaSeleccionada = '';
    }
  }

  eliminarEvento(evento: string) {
    this.eventos = this.eventos.filter(e => e !== evento);
  }

  irAHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
