import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoredateService } from '../../../core/CoredateService';




@Component({
  selector: 'app-Interviewer',
  templateUrl: './Interviewer.component.html',
  styleUrl: './Interviewer.component.css'

})
export class Interviewercomponent {
  @Input() showSidenav: boolean = true;
  @Output() close = new EventEmitter<void>();
  constructor(private http: HttpClient, private router: Router,public CoreDataservice: CoredateService) {}

  name = '';
  phone = '';
  email = '';
  resumeUrl: string | null = null;
  profilePicUrl: string | null = null;

  onProfilePicUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onResumeUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.resumeUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  viewResume(): void {
    if (this.resumeUrl) {
      window.open(this.resumeUrl, '_blank');
    }
  }

  onSubmit(form: any): void {
    if (form.valid) {
      alert('Profile saved successfully!');
      form.resetForm();
      this.resumeUrl = null;
      this.profilePicUrl = null;
    } else {
      alert('Please fill all required fields.');
    }
  }


}
