import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservas.UsuarioComponent } from './reservas.usuario.component';

describe('Reservas.UsuarioComponent', () => {
  let component: Reservas.UsuarioComponent;
  let fixture: ComponentFixture<Reservas.UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reservas.UsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservas.UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
