import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadorPage } from './cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadorPage
  },  {
    path: 'alertas',
    loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadorPageRoutingModule {}
