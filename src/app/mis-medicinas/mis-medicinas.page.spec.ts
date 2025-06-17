import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisMedicinasPage } from './mis-medicinas.page';

describe('MisMedicinasPage', () => {
  let component: MisMedicinasPage;
  let fixture: ComponentFixture<MisMedicinasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisMedicinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
