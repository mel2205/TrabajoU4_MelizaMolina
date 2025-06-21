import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { NavController } from '@ionic/angular';

interface Cita {
  tipo: string; // 'médico', 'enfermera', 'farmacia', etc.
  nombre: string; // Nombre del profesional o servicio
  especialidad?: string; // Opcional, solo para médicos/enfermeros
  proximoControl: string; // Fecha/hora o descripción
}

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.page.html',
  styleUrls: ['./mis-citas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MisCitasPage {
  proximasCitas: Cita[] = [];

  constructor(
    private doctorService: DoctorService,
    private navCtrl: NavController
  ) {
    this.proximasCitas = this.doctorService.getProximasCitas();
  }

  irAHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
