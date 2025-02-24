import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./page/login/login.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { RegisterComponent } from "./page/register/register.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public name: string = 'Gihani Madhubhashini';
}
