import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'botones',
    loadChildren: () => import('./paginas/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'avanzados',
    loadChildren: () => import('./paginas/avanzados/avanzados.module').then( m => m.AvanzadosPageModule)
  },
  
  
  {
    path: 'select',
    loadChildren: () => import('./paginas/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./paginas/navegacion/navegacion.module').then( m => m.NavegacionPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./paginas/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./paginas/items/items.module').then( m => m.ItemsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
