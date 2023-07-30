import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from '../home/home.component';
import { NewReceptComponent } from './new-recept/new-recept.component';
import { DayReceptComponent } from './day-recept/day-recept.component';

const routes: Routes = [
    {
        path: 'main-recept',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent
            },
            {
        path: ':id',
        component: DetailComponent,
    },
        ]
    },
    {
        path: 'add-recept',
        component: NewReceptComponent
    },
    {
        path: 'day-recept',
        component: DayReceptComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SingleRecRoutingModule { }
