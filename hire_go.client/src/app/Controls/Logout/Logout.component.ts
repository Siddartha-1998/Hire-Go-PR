import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './Logout.component.html',
})
export class LogOutComponent implements OnInit{
  constructor(private router: Router) {

  }
    ngOnInit(): void {
      this.router.navigate(['']);
    }

}
