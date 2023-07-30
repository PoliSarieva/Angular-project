import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { MainDishesComponent } from './main-dishes/main-dishes.component';
import { DessertsComponent } from './desserts/desserts.component';
import { ReceptRoutingModule } from './recepts-routing.module';



@NgModule({
  declarations: [
    AppetizersComponent,
    MainDishesComponent,
    DessertsComponent
  ],
  imports: [
    CommonModule, ReceptRoutingModule,
  ]
})
export class ReceptsModule { }
