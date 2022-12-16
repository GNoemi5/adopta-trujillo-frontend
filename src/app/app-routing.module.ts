import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroDonacionesComponent } from './registro-donaciones/registro-donaciones.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { InventarioDonacionesComponent } from './inventario-donaciones/inventario-donaciones.component';
import { MascotasAlbergadasComponent} from './mascotas-albergadas/mascotas-albergadas.component';
import { RegistroMascotasComponent } from './registro-mascotas/registro-mascotas.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-principal', pathMatch: 'full'},
  {
    path: 'home-principal',
    component: HomePrincipalComponent
  },
  {
    path: 'home-administrador',
    component: HomeAdministradorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inventario-donaciones',
    component: InventarioDonacionesComponent
  },
  {
    path: 'registroDonaciones',
    component: RegistroDonacionesComponent
  },
  {
    path: 'mascotas-albergadas',
    component: MascotasAlbergadasComponent
  },
  {
    path: 'registro-mascotas',
    component: RegistroMascotasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
