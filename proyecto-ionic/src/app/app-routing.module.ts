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
    path: 'listas-cards',
    loadChildren: () => import('./paginas/listas-cards/listas-cards.module').then( m => m.ListasCardsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
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
    path: 'avanzados',
    loadChildren: () => import('./paginas/avanzados/avanzados.module').then( m => m.AvanzadosPageModule)
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./paginas/navegacion/navegacion.module').then( m => m.NavegacionPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./paginas/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'toolbars',
    loadChildren: () => import('./paginas/toolbars/toolbars.module').then( m => m.ToolbarsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

