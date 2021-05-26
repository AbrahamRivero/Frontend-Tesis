import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudImportComponent } from './solicitud-import.component';

describe('SolicitudImportComponent', () => {
  let component: SolicitudImportComponent;
  let fixture: ComponentFixture<SolicitudImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
