import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CalendarioPage {
  
  fechaSeleccionada: string = '';
  eventos: string[] = [];

  agendarEvento() {
    if (this.fechaSeleccionada && !this.eventos.includes(this.fechaSeleccionada)) {
      this.eventos.push(this.fechaSeleccionada);
      this.fechaSeleccionada = ''; // Limpia el campo
    }
  }

  eliminarEvento(evento: string) {
    this.eventos = this.eventos.filter(e => e !== evento);
  }
constructor(private navCtrl: NavController) {}
  irAHome() {
    this.navCtrl.navigateRoot('/home'); // enviar al home
  }
}
