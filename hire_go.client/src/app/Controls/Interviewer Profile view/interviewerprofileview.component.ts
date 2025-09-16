import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { CoredateService } from "../../../core/CoredateService";
@Component({
  selector: 'app-profile',
  templateUrl: './InterviewerProfile.component.html',
  styleUrls: ['./InterviewerProfile.component.css']
})
export class InterviewerProfileComponent implements OnInit {

  Name: string = '';
  Email: string = '';
  PhoneNumber: string = '';
  skills: string = '';
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }

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

  isEditMode: boolean = false;
  originalData: any = {};

  enableEdit() {
    this.isEditMode = true;
    // Save original data to allow canceling
    this.originalData = {
      Name: this.Name,
      Email: this.Email,
      PhoneNumber: this.PhoneNumber
    };
  }

  saveProfile() {
    this.isEditMode = false;
    var SessionID = localStorage.getItem('SessionID')
    let payload = [];
    payload.push({ Name: this.Name, Email: this.Email, Phone: this.PhoneNumber, SessionID: SessionID,Skills :this.skills})
    this.CoreDataservice.SaveCall("InterViewerdemographics", JSON.stringify(payload), "Insert")
    console.log('Profile saved:', this.Name, this.Email, this.PhoneNumber);
  }

  cancelEdit() {
    this.isEditMode = false;
    // Revert changes
    this.Name = this.originalData.Name;
    this.Email = this.originalData.Email;
    this.PhoneNumber = this.originalData.PhoneNumber;
  }

  logout() {
    this.router.navigate(['']);
  }

  downloadResume() {
    console.log('Downloading resume...');
  }

  sendEmail() {
    console.log('Sending email...');
  }
}

