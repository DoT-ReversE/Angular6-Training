import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

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
    private _router: Router
  ) { }

  ngOnInit() {
    this._angularFirebaseAuth.authState.subscribe( response => {
      if (response) {
        this._router.navigate(['admin']);
      }
    })
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

}
