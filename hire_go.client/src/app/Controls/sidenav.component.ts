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
    username: '',
    password: '',
    email: '',
    role: 'User'
  };

  onSubmit() {
    this.close.emit();
    var response = this.CoreDataservice.Insert("LoginSession", JSON.stringify(this.user), "Insert")
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
    
  }
  goBack() {
    this.close.emit();
    this.router.navigate(['/dashboard']);
  }

}
