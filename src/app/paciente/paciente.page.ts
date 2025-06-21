import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { CommonModule } from '@angular/common'; // 
import { NavController } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [IonicModule, CommonModule], // 
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  providers: [CallNumber] 
})
export class PacientePage {
  constructor(
    private navCtrl: NavController,
    private callNumber: CallNumber) {}

  irAVideoConsulta() {
    this.navCtrl.navigateForward('/video-consulta');
  }
  irAMisMedicinas(){
    this.navCtrl.navigateForward('/mis-medicinas');
  }
  irAMiDoctor() {
    this.navCtrl.navigateForward('/mi-doctor');
  }
  irAMisCitas(){
    this.navCtrl.navigateForward('/mis-citas');
  }
   irAHome() {
    this.navCtrl.navigateRoot('/home'); // enviar al home
  }
  llamarDoctor() {
  this.callNumber.callNumber('+56966693501', true)
    .then(res => console.log('Llamando...', res))
    .catch(err => console.log('Error al llamar', err));
}

}