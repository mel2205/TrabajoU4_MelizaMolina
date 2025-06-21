import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Alerta {
  titulo: string;
  mensaje: string;
  fecha: Date;
  icono: string;
  categoria: 'critica' | 'importante' | 'informativa';
  estado: 'no-atendida' | 'pendiente' | 'informativo' | 'atendida';
}

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage {
  constructor(
    private router: Router,
    private toastController: ToastController // <-- Inyectamos ToastController aquí
  ) {}

  irAHome() {
    this.router.navigate(['/home']);
  }

  historialAlertas: Alerta[] = [
    {
      titulo: 'Presión arterial crítica',
      mensaje: '180/100 mmHg - Requiere atención inmediata',
      fecha: new Date(Date.now() - 5 * 60 * 1000),
      icono: 'alert-circle',
      categoria: 'critica',
      estado: 'no-atendida'
    },
    {
      titulo: 'Medicamento pendiente',
      mensaje: 'Metformina 850mg - Dosis de las 14:00',
      fecha: new Date(Date.now() - 30 * 60 * 1000),
      icono: 'medkit',
      categoria: 'importante',
      estado: 'pendiente'
    },
    {
      titulo: 'Signos vitales normales',
      mensaje: 'Todos los parámetros dentro del rango',
      fecha: new Date(Date.now() - 60 * 60 * 1000),
      icono: 'heart',
      categoria: 'informativa',
      estado: 'informativo'
    }
  ];

  // Contadores por estado
  get countNoAtendida() {
    return this.historialAlertas.filter(a => a.estado === 'no-atendida').length;
  }
  get countPendiente() {
    return this.historialAlertas.filter(a => a.estado === 'pendiente').length;
  }
  get countInformativo() {
    return this.historialAlertas.filter(a => a.estado === 'informativo').length;
  }
  get countAtendida() {
    return this.historialAlertas.filter(a => a.estado === 'atendida').length;
  }

  tiempoTranscurrido(fecha: Date): string {
    const ahora = new Date();
    const diff = Math.floor((ahora.getTime() - fecha.getTime()) / 60000); // minutos
    if (diff < 60) return `Hace ${diff} minutos`;
    const horas = Math.floor(diff / 60);
    return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
  }

  // Función para mostrar el toast
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }

  confirmarAlerta(alerta: Alerta) {
    alerta.estado = 'atendida';
    this.mostrarToast('¡Alerta atendida!');
  }
}
