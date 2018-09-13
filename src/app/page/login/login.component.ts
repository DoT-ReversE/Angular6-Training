import { AuthGuard } from './../../share/auth.guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: String = '';
  userPassword: String = '';

  constructor(
    private _angularFirebaseAuth: AngularFireAuth,
    private _router: Router,
  ) {
    this._angularFirebaseAuth.authState.subscribe( response => {
      if (response) {
        this._router.navigate(['admin']);
      }
    });
  }

  ngOnInit() {
  }

  onFormSubmit(_form: NgForm) {
    if (_form.valid) {
      this._angularFirebaseAuth.auth.signInWithEmailAndPassword(_form.value.userEmail, _form.value.userPassword)
      .then((response) => {
        if (response.user.emailVerified) {
          this._router.navigate(['admin']);
        } else {
          alert('Your email does not verify');
        }
      })
      .catch(error => alert(error));
    } else {
      alert('This is required element');
    }
  }

  onRegisterClick() {
    this._router.navigate(['register']);
  }

  onGoogleClick() {
    this._angularFirebaseAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  onFacebookClick() {
    this._angularFirebaseAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }
}
