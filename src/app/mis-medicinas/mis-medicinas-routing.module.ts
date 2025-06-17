import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisMedicinasPage } from './mis-medicinas.page';

const routes: Routes = [
  {
    path: '',
    component: MisMedicinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisMedicinasPageRoutingModule {}
