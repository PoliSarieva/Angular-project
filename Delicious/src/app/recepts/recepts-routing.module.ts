import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { MainDishesComponent } from './main-dishes/main-dishes.component';
import { DessertsComponent } from './desserts/desserts.component';

const routes: Routes = [
  {
    path: 'appetizers',
    component: AppetizersComponent,
  },
  {
    path: 'main-dishes',
    component: MainDishesComponent,
  },
  {
    path: 'desserts',
    component: DessertsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptRoutingModule { }
