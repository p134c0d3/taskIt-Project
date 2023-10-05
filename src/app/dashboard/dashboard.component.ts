import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isStatusExpanded: boolean = false;
  isDateExpanded: boolean = false;
  isPriorityExpanded: boolean = false;
}
