import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { CommonModule } from '@angular/common'; // 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuidador',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './cuidador.page.html',
  styleUrls: ['./cuidador.page.scss'],
})
export class CuidadorPage {

constructor(private navCtrl: NavController) {}
  irAHome() {
    this.navCtrl.navigateRoot('/home'); // enviar al home
  }
  irACalendario(){
    this.navCtrl.navigateRoot('/calendario');
  }
  irAAlertas(){
  this.navCtrl.navigateRoot('/alertas');
  }
}
