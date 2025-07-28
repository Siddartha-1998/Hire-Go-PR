  import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Chart,
  PieController,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { CoredateService } from '../../../core/CoredateService';

// Register chart components
Chart.register(
  PieController,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);




@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',

})
export class DashboardComponent implements OnInit {
    isGridView: boolean=false;

  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }
  totalApplications = 125;
  shortlisted = 40;
  interviews = 20;
  hired = 5;
  user: any; inHandCompanies: any;
  ngOnInit() {

    this.user = {
      name: 'Siddartha Garigipati',
      email: 'siddartha@example.com',
      lastLogin: '2025-07-22 09:45 AM'
    };

    this.inHandCompanies = [
      { name: 'Google', status: 'Pending' },
      { name: 'Microsoft', status: 'Scheduled Interview' },
      { name: 'Infosys', status: 'Offer Received' },
      { name: 'Google', status: 'Pending' },
      { name: 'Microsoft', status: 'Scheduled Interview' },
      { name: 'Infosys', status: 'Offer Received' },
      { name: 'Google', status: 'Pending' },
      { name: 'Microsoft', status: 'Scheduled Interview' },
      { name: 'Infosys', status: 'Offer Received' },
    ];
  }
  addApplicant() {
    alert('Redirect to Add Applicant form');
  }

  scheduleInterview() {
    alert('Open Schedule Interview window');
  }

  viewReports() {
    this.CoreDataservice.Fetch("Jobdetails", "test", "Fetch");
    this.router.navigate(['/report'])
  }
  toggleCompanyView() {
    this.isGridView = !this.isGridView;
  }


  

}
