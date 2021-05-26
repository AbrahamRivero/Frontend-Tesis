import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisOfertaComponent } from './analisis-oferta.component';

describe('AnalisisOfertaComponent', () => {
  let component: AnalisisOfertaComponent;
  let fixture: ComponentFixture<AnalisisOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
