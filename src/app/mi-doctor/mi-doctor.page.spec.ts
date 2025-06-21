import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiDoctorPage } from './mi-doctor.page';

describe('MiDoctorPage', () => {
  let component: MiDoctorPage;
  let fixture: ComponentFixture<MiDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
