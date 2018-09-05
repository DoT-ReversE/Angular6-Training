import { FoodService } from './../../service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private _foodService: FoodService) { }

  ngOnInit() {
    this._foodService.getFoods().subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
