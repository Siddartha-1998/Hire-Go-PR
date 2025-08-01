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
    let session = [];
    session.push({userid:this.SessionLogins.username,password:this.SessionLogins.password})
    var response = this.CoreDataservice.ServerCall("LoginSession", JSON.stringify(session), "Fetch")
    const parsedResponse = JSON.parse(response);
    if (parsedResponse != undefined && parsedResponse.LoginAccess == "Granted") {
      localStorage.setItem('Session', parsedResponse);
      sessionStorage.setItem('Session', parsedResponse);
      this.router.navigate(['dashboard']);
      var dta = this.CoreDataservice.ServerCall("LoginSession", JSON.stringify(session), "Fetchall")
    }
  }
  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 

}
