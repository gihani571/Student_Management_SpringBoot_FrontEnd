import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [

{
    path: "dashboard",
    component: DashboardComponent
},
{
    path: "login",
    component:LoginComponent
},
{
    path:"register",
    component:RegisterComponent
}

];
