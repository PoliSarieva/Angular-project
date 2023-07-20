import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from './details/details.component';
//import { NewReceptComponent } from './new-recept/new-recept.component';

const routes: Routes = [
    {
        path: 'appetizers',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent,
            },
            {
                path: ':id',
                component: DetailsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecCurrentRoutingModule { }
