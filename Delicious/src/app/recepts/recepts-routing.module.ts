import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainReceptComponent } from './main-recept/main-recept.component';

const routes: Routes = [
  {
    path: 'main-recept',
    component: MainReceptComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptRoutingModule { }
