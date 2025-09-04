import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewReportsComponent } from './Modules/Reports/viewReports.component';
import { DashboardComponent } from './Modules/DashBoard/Dashboard.component';

import { InterViewerDashboardComponent } from './Modules/InterViewerDashboard/InterviewerDashboard.component';
import { LoginComponent } from './Modules/LoginDashboard/Login.component';
import { CompanyDetailsComponent } from './Modules/CompanyDetails/CompanyDetails.component';





const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'report', component: ViewReportsComponent },
  { path: '', component: LoginComponent },
  { path: 'interviewer', component: InterViewerDashboardComponent },
  { path: 'CompanyDetails', component: CompanyDetailsComponent }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
