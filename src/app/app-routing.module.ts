import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapaConceptualComponent } from './pages/mapa-conceptual/mapa-conceptual.component';
import { SeleccionMultipleComponent } from './pages/seleccion-multiple/seleccion-multiple.component';
import { ExplicacionComponent } from './pages/explicacion/explicacion.component';

const routes: Routes = [
  {
    path: '',
    component: ExplicacionComponent
  },
  {
    path: 'mapa-conceptual',
    component: MapaConceptualComponent
  },
  {
    path: 'seleccion-multiple',
    component: SeleccionMultipleComponent
  },
  {
    path: 'explicacion',
    component: ExplicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
