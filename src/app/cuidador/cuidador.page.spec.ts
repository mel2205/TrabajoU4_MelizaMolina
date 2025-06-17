import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadorPage } from './cuidador.page';

describe('CuidadorPage', () => {
  let component: CuidadorPage;
  let fixture: ComponentFixture<CuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
