import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { CommonModule } from '@angular/common'; // 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [IonicModule, CommonModule], // 
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage {
  constructor(private navCtrl: NavController) {}

  irAVideoConsulta() {
    this.navCtrl.navigateForward('/video-consulta');
  }
  irAMisMedicinas(){
    this.navCtrl.navigateForward('/mis-medicinas');
  }
   irAHome() {
    this.navCtrl.navigateRoot('/home'); // enviar al home
  }
}