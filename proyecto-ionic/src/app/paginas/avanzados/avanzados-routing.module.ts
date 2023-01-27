import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvanzadosPage } from './avanzados.page';

const routes: Routes = [
  {
    path: '',
    component: AvanzadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvanzadosPageRoutingModule {}
