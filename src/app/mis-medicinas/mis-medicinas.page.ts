import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-medicinas',
  templateUrl: './mis-medicinas.page.html',
  styleUrls: ['./mis-medicinas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MisMedicinasPage implements OnInit {

 constructor(private navCtrl: NavController) {}
 
   irAHome() {
    this.navCtrl.navigateRoot('/home'); // enviar al home
  }

  ngOnInit() {
  }

}
