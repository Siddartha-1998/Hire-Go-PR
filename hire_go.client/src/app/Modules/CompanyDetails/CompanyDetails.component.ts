import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { CoredateService } from "../../../core/CoredateService";



@Component({
  selector: 'app-CompanyDetails',
  templateUrl: './CompanyDetails.component.html'
})
export class CompanyDetailsComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }
  public dataList: any[] = [];
  Newuser: boolean = false;
  ngOnInit() {
  }
  onSidenavClose() {
    this.Newuser = false;
  }
  onUserSave(newUser: any) {
    // push new user to table after save
    this.dataList.push(newUser);
    this.Newuser = false;
  }
  AddNewuser() {
    this.Newuser = true;
  }
  datafetch() {
    let session = [];
    session.push(["userid"]);
    this.CoreDataservice.ServerCall("DashBoard", JSON.stringify(session), "Fetchall")
      .subscribe((response: any) => {
        const parsedResponse = JSON.parse(response);
        this.dataList = parsedResponse;
      });
    // Assign parsed data to the class property
    
  }
  goBack() {
    this.close.emit();
    this.router.navigate(['/dashboard']);
  }

}
  
   
