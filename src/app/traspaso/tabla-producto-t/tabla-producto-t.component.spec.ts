import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductoTComponent } from './tabla-producto-t.component';

describe('TablaProductoTComponent', () => {
  let component: TablaProductoTComponent;
  let fixture: ComponentFixture<TablaProductoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaProductoTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProductoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
