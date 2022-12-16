import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioDonacionesComponent } from './inventario-donaciones.component';

describe('InventarioDonacionesComponent', () => {
  let component: InventarioDonacionesComponent;
  let fixture: ComponentFixture<InventarioDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioDonacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
