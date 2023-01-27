import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasPage } from './paginas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginasPage
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./navegacion/navegacion.module').then( m => m.NavegacionPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'avanzados',
    loadChildren: () => import('./avanzados/avanzados.module').then( m => m.AvanzadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasPageRoutingModule {}
