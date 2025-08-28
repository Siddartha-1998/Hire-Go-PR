  import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  Chart,
  PolarAreaController,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale
} from 'chart.js';
import { CoredateService } from '../../../core/CoredateService';

Chart.register(
  PolarAreaController,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale
);




@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrl:'./Dashboard.component.css'

})
export class DashboardComponent implements OnInit {
    isGridView: boolean=false;
    Newuser: boolean=false;
  @Input() showSidenav: boolean = true;
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }
  totalApplications = 125;
  shortlisted = 40;
  interviews = 20;
  hired = 5;
  user: any; inHandCompanies: any;
  ngOnInit() {
    setTimeout(() => {
      this.renderChart('chartTotal', this.totalApplications, '#42a5f5', 'Total Applications', 'doughnut');
      this.renderChart('chartShortlisted', this.shortlisted, '#66bb6a', 'Shortlisted', 'pie');
      this.renderChart('chartInterviews', this.interviews, '#ffa726', 'Interviews', 'bar');
      this.renderChart('chartHired', this.hired, '#ab47bc', 'Hired', 'polarArea');
    }, 0);
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

    var data = this.CoreDataservice.ServerCall("DashBoard", "test", "Fetchall");
  }
  renderChart(canvasId: string, value: number, color: string, label: string, type: 'pie' | 'bar' | 'doughnut' | 'polarArea'): void {
    new Chart(canvasId, {
      type: type,
      data: {
        labels: [label, 'Remaining'],
        datasets: [{
          data: [value, this.totalApplications - value],
          backgroundColor: [color, '#e0e0e0'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        }
      }
    });
  }

  viewReports() {
    this.CoreDataservice.ServerCall("Jobdetails", "test", "Fetch");
    this.router.navigate(['/report'])
  }
  toggleCompanyView() {
    this.isGridView = !this.isGridView;
  }
  AddNewuser() {
    this.Newuser = true;
  }
  onSidenavClose() {
    this.Newuser = false;
  }
}
