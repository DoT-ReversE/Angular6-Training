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

  todayDate: String = '5/9/2018';
  yesterdayDate: String = '4/9/2018';
  lastWeekDate: String = '25/9/2018';

  constructor() { }

  ngOnInit() {
  }

  onTodayItemClick(item) {
    console.log('dashboard\t' + item);
  }
}
