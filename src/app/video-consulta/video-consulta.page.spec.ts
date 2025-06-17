import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoConsultaPage } from './video-consulta.page';

describe('VideoConsultaPage', () => {
  let component: VideoConsultaPage;
  let fixture: ComponentFixture<VideoConsultaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
