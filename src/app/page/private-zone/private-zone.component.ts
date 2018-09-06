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
}
