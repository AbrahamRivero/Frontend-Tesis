import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductoMComponent } from './tabla-producto-m.component';

describe('TablaProductoMComponent', () => {
  let component: TablaProductoMComponent;
  let fixture: ComponentFixture<TablaProductoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaProductoMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProductoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
