import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionEmpresaComponent } from './descripcion-empresa.component';

describe('DescripcionEmpresaComponent', () => {
  let component: DescripcionEmpresaComponent;
  let fixture: ComponentFixture<DescripcionEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
