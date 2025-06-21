import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mi-doctor',
  templateUrl: './mi-doctor.page.html',
  styleUrls: ['./mi-doctor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MiDoctorPage {
  doctores = [
    {
      nombre: 'Dr. Andrés González',
      especialidad: 'Cardióloga',
      foto: 'assets/doctores/andres.jpg',
      proximoControl: '15 de julio de 2025, 09:00 AM'
    },
    {
      nombre: 'Dr. Juan Ruiz',
      especialidad: 'Endocrinólogo',
      foto: 'assets/doctores/juan.jpg',
      proximoControl: '22 de agosto de 2025, 11:30 AM'
    },
    {
      nombre: 'Dr. Pedro Zelada',
      especialidad: 'Geriatra',
      foto: 'assets/doctores/pedro.jpg',
      proximoControl: '22 de agosto de 2025, 11:30 AM'
    }
    // Puedes agregar más doctores aquí
  ];

  constructor(private navCtrl: NavController) {}

  irAHome() {
    this.navCtrl.navigateRoot('/home'); //home
  }
}
