import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasCardsPage } from './listas-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ListasCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasCardsPageRoutingModule {}
