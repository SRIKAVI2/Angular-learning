import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component : HomeComponent}, //default
    {path:'about', component : AboveComponent},
    {path:'**', redirectTo: ''} // wildcard
];
