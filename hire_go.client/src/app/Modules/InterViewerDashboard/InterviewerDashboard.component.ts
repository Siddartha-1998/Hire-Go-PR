  import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoredateService } from '../../../core/CoredateService';




@Component({
  selector: 'app-InterviewerDashboard',
  templateUrl: './InterviewerDashboard.component.html',

})
export class InterViewerDashboardComponent {
  addnewprofile: boolean=false;
  Menuhidden: boolean = false;
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }

  isMenuOpen: boolean = true;
  searchText: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToAddProfile() {
    this.addnewprofile = true;
    this.Menuhidden = true;
  }

  goToViewProfile() {
    alert("Navigate to View Profile page or section");
  }

  logout() {
    this.router.navigate(['']);
  }
}
