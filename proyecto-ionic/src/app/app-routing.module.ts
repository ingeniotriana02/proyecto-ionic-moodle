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
    path: 'item',
    loadChildren: () => import('./paginas/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./paginas/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./paginas/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./paginas/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./paginas/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./paginas/navegacion/navegacion.module').then( m => m.NavegacionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

