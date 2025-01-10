import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)},
    {path:'faq',loadComponent:()=>import('./faq/faq.component').then(c=>c.FaqComponent)},
    {path:'about',loadComponent:()=>import('./about/about.component').then(c=>c.AboutComponent)},
    {path:'login', loadComponent:()=>import('./login/login.component').then(c=>c.LoginComponent)}
];
