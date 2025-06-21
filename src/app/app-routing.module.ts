import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'paciente',
    loadComponent: () => import('./paciente/paciente.page').then( m => m.PacientePage)
  },
  {
    path: 'video-consulta',
    loadComponent: () => import('./video-consulta/video-consulta.page').then( m => m.VideoConsultaPage)
  },
  {
    path: 'mis-medicinas',
    loadComponent: () => import('./mis-medicinas/mis-medicinas.page').then( m => m.MisMedicinasPage)
  },
  {
    path: 'cuidador',
    loadComponent: () => import('./cuidador/cuidador.page').then( m => m.CuidadorPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
    {
    path: 'cuidador/alertas',
    loadComponent: () => import('./cuidador/alertas/alertas.page').then(m => m.AlertasPage)
  },
  {
    path: 'mi-doctor',
    loadComponent: () => import('./mi-doctor/mi-doctor.page').then( m => m.MiDoctorPage)
  },
  {
    path: 'mis-citas',
    loadComponent: () => import('./mis-citas/mis-citas.page').then( m => m.MisCitasPage)
  },
 

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }