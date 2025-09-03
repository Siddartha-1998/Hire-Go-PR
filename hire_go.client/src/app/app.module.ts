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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewReportsComponent,
    sidenavComponent,
    LoginComponent,
    InterViewerDashboardComponent
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
