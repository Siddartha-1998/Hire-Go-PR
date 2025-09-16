  import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoredateService } from '../../../core/CoredateService';




@Component({
  selector: 'app-InterviewerDashboard',
  templateUrl: './InterviewerDashboard.component.html',

})
export class InterViewerDashboardComponent implements OnInit {
  addnewprofile: boolean=false;
  Menuhidden: boolean = false;

  Name: string = '';
  Email: string = '';
  PhoneNumber: string = '';
  skills: string = '';

  searchText: string = '';
  selectedExperience: string = '';
  filteredProfiles :any;
  filteredJobs: any;
  experienceLevels: any = [];
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }

  isMenuOpen: boolean = true;
  ngOnInit(): void {
    let session = [];
    var SessionID = localStorage.getItem('SessionID')
    session.push(SessionID);
    this.CoreDataservice.ServerCall("InterViewerdemographics", JSON.stringify(session), "Fetchall")
      .subscribe((response: any) => {
        const parsedResponse = JSON.parse(response);
        for (let key in parsedResponse) {
          if (parsedResponse.hasOwnProperty(key)) {
            this.Name = parsedResponse[key].Name;
            this.Email = parsedResponse[key].Email;
            this.PhoneNumber = parsedResponse[key].PhoneNumber;
            this.skills = parsedResponse[key].Skills;


          }
        }

      });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToAddProfile() {
    this.addnewprofile = true;
    this.Menuhidden = true;
  }

  goToViewProfile() {
    this.router.navigate(['interviewerProfile']);
  }

  logout() {
    this.router.navigate(['']);
  }
  applyFilters() {
    
  }

  applyJob(job: any) {
    alert(`You have applied for ${job.title}`);
  }
}
