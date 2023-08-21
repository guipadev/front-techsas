import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExplicacionComponent } from './pages/explicacion/explicacion.component';
import { MapaConceptualComponent } from './pages/mapa-conceptual/mapa-conceptual.component';
import { SeleccionMultipleComponent } from './pages/seleccion-multiple/seleccion-multiple.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ExplicacionComponent,
    MapaConceptualComponent,
    SeleccionMultipleComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
