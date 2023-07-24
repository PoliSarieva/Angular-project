import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SingleRecRoutingModule } from './singleRec.routing.module';
import { NewReceptComponent } from './new-recept/new-recept.component';



@NgModule({
  declarations: [
    DetailComponent, NewReceptComponent
  ],
  imports: [
    CommonModule, SingleRecRoutingModule
  ]
})
export class SingleReceptModule { }
