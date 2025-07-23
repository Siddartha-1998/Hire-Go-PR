import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-viewReports',
  templateUrl: './viewReports.component.html',

})
export class ViewReportsComponent implements OnInit {
  
  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderCharts();
  }

  renderCharts() {
    new Chart("statusPieChart", {
      type: 'pie',
      data: {
        labels: ['Shortlisted', 'Rejected', 'On Hold'],
        datasets: [{
          label: 'Application Status',
          data: [40, 60, 25],
          backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        }]
      }
    });

    new Chart("monthlyBarChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Applications',
          data: [12, 19, 13, 17, 20, 22],
          backgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
  ngOnInit() {
    
  }
  

}
