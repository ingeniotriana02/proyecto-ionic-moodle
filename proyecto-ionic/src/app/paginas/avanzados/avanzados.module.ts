import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvanzadosPageRoutingModule } from './avanzados-routing.module';

import { AvanzadosPage } from './avanzados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvanzadosPageRoutingModule
  ],
  declarations: [AvanzadosPage]
})
export class AvanzadosPageModule {}
