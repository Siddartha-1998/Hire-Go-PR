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

  //profile = {
  //  name: "Jane Doe",
  //  jobTitle: "Software Engineer",
  //  location: "San Francisco, CA",
  //  email: "jane.doe@example.com",
  //  phoneNumber: "9876543210",
  //  summary: "Passionate developer with 5+ years of experience in building web applications.",
  //  skills: ["Angular", "TypeScript", "REST API", "Node.js"],
  //  avatarUrl: ""
  //};

  Name: string = '';
  Email: string = '';
  PhoneNumber: string = '';

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


          }
        }

      });
  }

  editProfile() {
    alert('Edit profile clicked!');
    // navigate to edit page or open modal
  }

  downloadResume() {
    alert('Downloading resume...');
    // implement file download logic here
  }

  sendEmail() {
    //window.location.href = `mailto:${this.profile.email}`;
  }
  logout() {
    this.router.navigate(['']);
  }
}

