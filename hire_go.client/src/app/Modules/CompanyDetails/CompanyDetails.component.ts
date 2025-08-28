import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { CoredateService } from "../../../core/CoredateService";



@Component({
  selector: 'app-Dashboard',
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
    var response = this.CoreDataservice.SaveCall("DashBoard", JSON.stringify(session), "Fetchall");
    const parsedResponse = JSON.parse(response);
    // Assign parsed data to the class property
    this.dataList = parsedResponse;
  }
  goBack() {
    this.close.emit();
    this.router.navigate(['/dashboard']);
  }

}
  
   
