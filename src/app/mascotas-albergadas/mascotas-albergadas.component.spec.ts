import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAlbergadasComponent } from './mascotas-albergadas.component';

describe('MascotasAlbergadasComponent', () => {
  let component: MascotasAlbergadasComponent;
  let fixture: ComponentFixture<MascotasAlbergadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasAlbergadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasAlbergadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
