import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',

})
export class sidenavComponent implements OnInit {
  @Input() showSidenav: boolean = true;
  @Output() close = new EventEmitter<void>();
  constructor(private http: HttpClient, private router: Router) {}

  user = {
    username: '',
    password: '',
    email: '',
    role: 'User'
  };

  onSubmit() {
    this.close.emit();
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
    
  }
  goBack() {
    this.close.emit();
    this.router.navigate(['/dashboard']);
  }

}
