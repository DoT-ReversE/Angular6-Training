import { Food } from './../../model/food';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { FoodService } from './../../service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  _foods: Observable<Food[]>;
  _search: string;

  constructor(
    private _router: Router,
    private _afstore: AngularFirestore
  ) { }

  ngOnInit() {
    this._foods = this._afstore
      .collection<Food>('Food')
      .valueChanges();
  }

  onAddClick() {
    this._router.navigate(['admin', 'food']);
  }

  onSearchClick() {
    /*
    this._foods = this._afstore.collection<Food>('Food',
                  ref => ref.where('name', '==', this._search))
                  .valueChanges();
    */

    this._foods = this._afstore.collection<Food>('Food',
    ref => ref.orderBy('name').startAt(this._search + '\uf8ff'))
    .valueChanges();
  }

  onRemoveClick(name) {
    this._afstore.collection('Food')
    .doc(name)
    .delete()
    .then( result => {

    }).catch( error => {

    });
  }
}
