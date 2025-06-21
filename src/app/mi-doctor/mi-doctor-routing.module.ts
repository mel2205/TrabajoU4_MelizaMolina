import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiDoctorPage } from './mi-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: MiDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiDoctorPageRoutingModule {}
