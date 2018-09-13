import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-zone',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.css']
})
export class PrivateZoneComponent implements OnInit {

  constructor(
    private _angularFirebaseAuth: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSignOutClick() {
    this._angularFirebaseAuth.auth.signOut()
    .then(() => {
      this._router.navigate(['login']);
    })
    .catch( error => alert(error));
  }

  onProfileClick() {
    this._router.navigate(['admin/profile']);
  }

  onDashboardClick() {
    this._router.navigate(['admin/']);
  }

  onCaloriesClick() {
    this._router.navigate(['admin/calories']);
  }

  onSleepClick() {
    this._router.navigate(['admin/sleep']);
  }

  onWeightClick() {
    this._router.navigate(['admin/weight']);
  }

  onFoodClick() {
    this._router.navigate(['admin/food']);
  }

  onFoodListClick() {
    this._router.navigate(['admin/food-list']);
  }

}
