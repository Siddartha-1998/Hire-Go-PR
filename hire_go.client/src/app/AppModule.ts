import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { sidenavComponent } from "./Controls/sidenav.component";
import { DashboardComponent } from "./Modules/DashBoard/Dashboard.component";
import { InterViewerDashboardComponent } from "./Modules/InterViewerDashboard/InterviewerDashboard.component";
import { LoginComponent } from "./Modules/LoginDashboard/Login.component";
import { ViewReportsComponent } from "./Modules/Reports/viewReports.component";
import { CompanyDetailsComponent } from "./Modules/CompanyDetails/CompanyDetails.component";
import { Interviewercomponent } from "./Controls/Interviewer side nav/Interviewer.component";
import { InterviewerProfileComponent } from "./Controls/Interviewer Profile view/interviewerprofileview.component";




@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ViewReportsComponent,
        sidenavComponent,
        LoginComponent,
    InterViewerDashboardComponent,
    CompanyDetailsComponent,
    Interviewercomponent,
    InterviewerProfileComponent

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
export class AppModule {
}
