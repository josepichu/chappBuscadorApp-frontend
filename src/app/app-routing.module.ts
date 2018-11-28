import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReservaComponent } from './pages/habitaciones/reserva/reserva.component';
import { ReservasUsuarioComponent } from './pages/reservas/usuario/reservas.usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sigup', component: RegistroComponent },
  { path: 'reserva/:habitacion_id/:fecha_entrada/:fecha_salida', component: ReservaComponent },
  { path: 'mis/reservas', component: ReservasUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
