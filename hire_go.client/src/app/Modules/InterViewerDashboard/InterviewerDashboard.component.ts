  import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoredateService } from '../../../core/CoredateService';




@Component({
  selector: 'app-InterviewerDashboard',
  templateUrl: './InterviewerDashboard.component.html',

})
export class InterViewerDashboardComponent implements OnInit {

  companies: any[] = [];
  loading: boolean = true;
    disable: boolean=false;
    companyInfo: any= [];
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }

  ngOnInit() {
    let session = [];
    session.push({userid: "Test"});
    this.CoreDataservice.ServerCall("DashBoard", JSON.stringify(session), "Fetchall")
      .subscribe((response: any) => {
        const parsedResponse = JSON.parse(response);
        this.companies = parsedResponse;
      });
    

  }
  viewInterviewers(company: any): void {
    this.CoreDataservice.ServerCall("DashBoard", JSON.stringify(company), "Single")
      .subscribe((result: any) => {
        const parsedResponse = JSON.parse(result);
        this.companyInfo = parsedResponse;
        this.disable = true;
      });
   
  }
}
