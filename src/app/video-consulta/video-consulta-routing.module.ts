import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoConsultaPage } from './video-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: VideoConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoConsultaPageRoutingModule {}
