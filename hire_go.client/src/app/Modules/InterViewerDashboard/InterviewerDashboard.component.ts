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
  selector: 'app-InterviewerDashboard',
  templateUrl: './InterviewerDashboard.component.html',

})
export class InterViewerDashboardComponent implements OnInit {
    isGridView: boolean=false;
    Newuser: boolean=false;
  @Input() showSidenav: boolean = true;
  constructor(private http: HttpClient, private router: Router, public CoreDataservice: CoredateService) { }

  ngOnInit() {
  


  }

}
