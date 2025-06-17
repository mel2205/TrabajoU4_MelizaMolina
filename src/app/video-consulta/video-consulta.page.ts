import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-consulta',
  templateUrl: './video-consulta.page.html',
  styleUrls: ['./video-consulta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class VideoConsultaPage implements OnInit {
  tiempo = '05:23';
  estadoConexion = 'Conexión Estable';

  constructor() { }

  ngOnInit() {
  }

}
