import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewReportsComponent } from './Modules/Reports/viewReports.component';
import { DashboardComponent } from './Modules/DashBoard/Dashboard.component';
import { LoginComponent } from './Modules/LoginDashboard/login.component';




const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'report', component: ViewReportsComponent },
  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
