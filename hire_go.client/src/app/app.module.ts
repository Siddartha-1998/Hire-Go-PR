import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewReportsComponent } from './Modules/Reports/viewReports.component';
import { DashboardComponent } from './Modules/DashBoard/Dashboard.component';
import { LoginComponent } from './Modules/LoginDashboard/Login.component';
import { FormsModule } from '@angular/forms';
import { sidenavComponent } from './Controls/sidenav.component';
import { InterViewerDashboardComponent } from './Modules/InterViewerDashboard/InterviewerDashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CompanyDetailsComponent } from './Modules/CompanyDetails/CompanyDetails.component';
import { LogOutComponent } from './Controls/Logout/Logout.component';
import { Interviewercomponent } from './Controls/Interviewer side nav/Interviewer.component';
import { InterviewerProfileComponent } from './Controls/Interviewer Profile view/interviewerprofileview.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewReportsComponent,
    sidenavComponent,
    LoginComponent,
    InterViewerDashboardComponent,
    LogOutComponent,
    InterviewerProfileComponent,
    Interviewercomponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
