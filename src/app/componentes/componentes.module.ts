import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CabeceraComponent
  ]
})
export class ComponentesModule { }
