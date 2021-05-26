import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoLimAsigComponent } from './presupuesto-lim-asig.component';

describe('PresupuestoLimAsigComponent', () => {
  let component: PresupuestoLimAsigComponent;
  let fixture: ComponentFixture<PresupuestoLimAsigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoLimAsigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoLimAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
