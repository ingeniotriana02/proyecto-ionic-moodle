import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasCardsPageRoutingModule } from './listas-cards-routing.module';

import { ListasCardsPage } from './listas-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasCardsPageRoutingModule
  ],
  declarations: [ListasCardsPage]
})
export class ListasCardsPageModule {}
