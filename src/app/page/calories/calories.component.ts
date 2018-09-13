import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  _date: Date = new Date();
  _data;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onDelClick(foodCd) {

  }

  onFoodListClick() {
    this._router.navigate(['admin', 'food-list']);
  }

}
