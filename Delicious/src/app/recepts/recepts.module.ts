import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReceptComponent } from './main-recept/main-recept.component';
import { ReceptRoutingModule } from './recepts-routing.module';



@NgModule({
  declarations: [
    MainReceptComponent
  ],
  imports: [
    CommonModule, ReceptRoutingModule,
  ]
})
export class ReceptsModule { }
