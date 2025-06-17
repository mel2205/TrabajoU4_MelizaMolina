import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage {

   constructor(private navCtrl: NavController) {}
  irAHome() {
    this.navCtrl.navigateRoot('/home'); // enviar al home
  }
  tabSeleccionado = 'historial';

  historialAlertas = [
    { titulo: 'Evento agendado', fecha: new Date(), icono: 'calendar-outline' },
    { titulo: 'Medicamento por vencer', fecha: new Date(Date.now() - 600000), icono: 'medkit-outline' },
    // ... puedes agregar más para pruebas
  ];

  configAlertas = {
    eventos: true,
    medicinas: false,
  };
  
}

