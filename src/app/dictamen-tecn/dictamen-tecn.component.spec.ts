import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenTecnComponent } from './dictamen-tecn.component';

describe('DictamenTecnComponent', () => {
  let component: DictamenTecnComponent;
  let fixture: ComponentFixture<DictamenTecnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenTecnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenTecnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
