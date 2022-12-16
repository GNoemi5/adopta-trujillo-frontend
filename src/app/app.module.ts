import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegistroDonacionesComponent } from './registro-donaciones/registro-donaciones.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { RegistroMascotasComponent } from './registro-mascotas/registro-mascotas.component';
import { MascotasAlbergadasComponent } from './mascotas-albergadas/mascotas-albergadas.component';
import { InventarioDonacionesComponent } from './inventario-donaciones/inventario-donaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroDonacionesComponent,
    HomePrincipalComponent,
    HomeAdministradorComponent,
    RegistroMascotasComponent,
    MascotasAlbergadasComponent,
    InventarioDonacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }