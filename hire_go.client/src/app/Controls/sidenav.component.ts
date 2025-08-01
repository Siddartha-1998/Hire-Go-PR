import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoredateService } from '../../core/CoredateService';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'

})
export class sidenavComponent implements OnInit {
  @Input() showSidenav: boolean = true;
  @Output() close = new EventEmitter<void>();
  constructor(private http: HttpClient, private router: Router,public CoreDataservice: CoredateService) {}

  user = {
    Username: '',
    Password: '',
    Email: '',
    Roles: '',
    CompanyName: '',
    CompanyDetails: ''
  };

  onSubmit() {
    this.close.emit();
    let DashboardCompanyList = [];
    DashboardCompanyList.push(this.user)
    var response = this.CoreDataservice.ServerCall("DashBoard", JSON.stringify(DashboardCompanyList), "Insert")
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
    
  }
  goBack() {
    this.close.emit();
    this.router.navigate(['/dashboard']);
  }

}
