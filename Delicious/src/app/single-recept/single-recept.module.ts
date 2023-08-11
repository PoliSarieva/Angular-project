import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SingleRecRoutingModule } from './singleRec.routing.module';
import { EditCreateReceptComponent } from './edit-create/edit-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayReceptComponent } from './day-recept/day-recept.component';



@NgModule({
  declarations: [
    DetailComponent, EditCreateReceptComponent, DayReceptComponent
  ],
  imports: [
    CommonModule, SingleRecRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class SingleReceptModule { }
