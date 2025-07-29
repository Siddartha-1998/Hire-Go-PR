import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoredateService } from '../../../core/CoredateService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../../Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {
  enableLoginPage: boolean = false;
  loginText: string = '';
  SessionLogins : login = new login();
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === '1234') {
        this.errorMessage = 'Login successful!';
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    }
  }
  loginAccess(flag: any) {
    if (flag == "Admin") {
      this.loginText = "Admin Login";
      this.enableLoginPage = true;
    }
    else {
      this.loginText = "Interviewer Login";
      this.enableLoginPage = true;
    }
  }
  Submit() {
    this.router.navigate(['dashboard'])
    let session = [];
    session.push({username:this.SessionLogins.username,password:this.SessionLogins.password})
    var response = this.CoreDataservice.Insert("LoginSession", JSON.stringify(session), "Fetch")
    if (response?.LoginAccess =="Granted") {
      this.router.navigate(['dashboard'])
    }
    else {
      alert(response?.LoginAccess);
    }
    
  }

}
