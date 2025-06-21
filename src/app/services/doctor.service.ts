import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  getProximasCitas() {
    return [
      {
        tipo: 'médico',
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Cardiología',
        proximoControl: '2025-07-02 10:00 AM'
      },
      {
        tipo: 'enfermera',
        nombre: 'Enfermera Ana Gómez',
        especialidad: 'Control de presión',
        proximoControl: '2025-07-03 09:00 AM'
      },
      {
        tipo: 'farmacia',
        nombre: 'Farmacia Central',
        proximoControl: 'Retiro de medicamentos el 2025-07-04'
      }
    ];
  }
}
