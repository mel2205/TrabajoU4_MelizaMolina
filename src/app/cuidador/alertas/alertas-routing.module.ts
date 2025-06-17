import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlertasPageRoutingModule } from './alertas-routing.module';
import { AlertasPage } from './alertas.page';

const routes: Routes = [
  {
    path: '',
    component: AlertasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertasPageRoutingModule
  ],
  declarations: [AlertasPage]
})

export class AlertasPageModule {
  
}
