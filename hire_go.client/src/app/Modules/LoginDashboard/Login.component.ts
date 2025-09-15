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
    enableLoader: boolean=false;
    disable: boolean=false;
    enableSignupinterviewer: boolean=false;
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
    if (flag == "Admin login") {
      this.loginText = "Admin Login";
      this.enableLoginPage = true;
    }
    else {
      this.loginText = "Interviewer Login";
      this.enableLoginPage = true;
      this.disable = false;

    }
  }

  SignUp() {
    if (this.loginText == "Admin Login") {
      this.loginText = "Admin Register";
      this.disable = true;
    }
    else {
      this.loginText = "Interviewer Register";
      this.enableSignupinterviewer = true;
      this.disable = true;
    }
  }
  Submit() {
    let session = [];
    this.enableLoader = true;
    session.push({userid:this.SessionLogins.username,password:this.SessionLogins.password,type:this.loginText})
    this.CoreDataservice.ServerCall("LoginSession", JSON.stringify(session), "Fetch")
      .subscribe((response: any) => {
         // Angular HttpClient already parses JSON
        const parsedResponse = JSON.parse(response)
        this.enableLoader = false;
        if (parsedResponse != undefined && parsedResponse.LoginAccess.includes("Granted") && this.loginText == "Admin Login") {
          localStorage.setItem('Session', parsedResponse);
          sessionStorage.setItem('Session', parsedResponse);
          this.router.navigate(['dashboard']);
        }
        else if (this.loginText != "Interviewer Login") {
          alert("Invalid Logins !")
        }
        else {
          if (parsedResponse != undefined && this.loginText == "Interviewer Login") {
            localStorage.setItem('SessionID', parsedResponse.LoginAccess);
            sessionStorage.setItem('SessionID', parsedResponse.LoginAccess);
            this.router.navigate(['interviewer']);
          }
          else {
            this.router.navigate(['']);
          }
        }
      });

  }
  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 

}
