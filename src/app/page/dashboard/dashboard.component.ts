import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
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

  _items: Observable<any[]>;

  constructor(
    private _afdatabase: AngularFireDatabase,
    private _router: Router
  ) { }

  ngOnInit() {
    this._items = this._afdatabase.list('item').valueChanges();
  }

  onTodayItemClick(item) {
    this._afdatabase.list('item').push(item)
    .then(() => {
      this._router.navigate(['admin', item]);
    });
    console.log('dashboard\t' + item);
  }

  onYesterdayItemClick(item) {
    console.log('dashboard\t' + item);
  }

  onLastWeekItemClick(item) {
    console.log('dashboard\t' + item);
  }
}
