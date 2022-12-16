import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDonacionesComponent } from './registro-donaciones.component';

describe('RegistroDonacionesComponent', () => {
  let component: RegistroDonacionesComponent;
  let fixture: ComponentFixture<RegistroDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDonacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
