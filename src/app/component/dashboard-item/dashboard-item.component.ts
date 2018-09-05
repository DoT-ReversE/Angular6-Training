import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  @Input() title;
  @Input() date;

  @Output() itemClick = new EventEmitter<String>();

  caloriesText = 'Calories';
  sleepText = 'Sleep';
  weightText = 'Weight';
  bmiText = 'BMI';

  constructor() { }

  ngOnInit() {
  }

  onItemClick(item) {
    this.itemClick.emit(item);
  }

}
