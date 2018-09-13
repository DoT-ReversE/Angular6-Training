import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatePipe } from '@angular/common';
import { Weight } from '../../model/weight';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  _date: Date = new Date();
  _dateyyyyMMdd;
  _datePipe = new DatePipe('en-US');
  _weight;

  constructor(
    private _afStore: AngularFirestore,
    private _router: Router
  ) {
    this._dateyyyyMMdd = this._datePipe.transform(this._date, 'yyyyMMdd');
  }

  ngOnInit() {
    this._afStore.collection('weight')
    .doc<Weight>(this._dateyyyyMMdd)
    .valueChanges()
    .subscribe( result => {
      this._weight = result.data;
    });
  }

  onSaveWeight(_form: NgForm) {
    this._afStore.collection('weight')
    .doc(this._dateyyyyMMdd)
    .set(<Weight> { data: this._weight })
    .then( result => {
      this._router.navigate(['admin']);
    }).catch(error => {

    });
  }
}
