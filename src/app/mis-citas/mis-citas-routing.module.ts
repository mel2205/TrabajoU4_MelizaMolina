import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCitasPage } from './mis-citas.page';

const routes: Routes = [
{
  path: 'mis-citas',
  loadComponent: () => import('./mis-citas/mis-citas.page').then(m => m.MisCitasPage)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCitasPageRoutingModule {}
