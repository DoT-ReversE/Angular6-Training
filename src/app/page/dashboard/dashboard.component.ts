import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todayTitle: String = 'Today';
  yesterdayTitle: String = 'Yesterday';
  lastWeekTitle: String = 'Last Week';

  todayDate: Date = new Date();
  yesterdayDate: String = '9/4/2018';
  lastWeekDate: String = '9/25/2018';

  constructor() { }

  ngOnInit() {
  }

  onTodayItemClick(item) {
    console.log('dashboard\t' + item);
  }
}
