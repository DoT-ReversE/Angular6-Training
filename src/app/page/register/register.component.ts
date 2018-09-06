import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail: String = '';
  userPassword: String = '';
  confirmPassword: String = '';

  constructor(
    private _angularFirebaseAuth: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onFormSubmit(_form: NgForm) {
    if (_form.valid) {
      if (_form.value.userPassword === _form.value.confirmPassword) {
        this._angularFirebaseAuth.auth.createUserWithEmailAndPassword(_form.value.userEmail, _form.value.userPassword)
        .then((response) => {
          response.user.sendEmailVerification();
          alert('Successfully register please verify your account');
          return Promise.resolve();
        })
        .then(() => {
          this._router.navigate(['login']);
        })
        .catch(error => alert(error));
      } else {
        alert('Password does not match');
      }
    } else {
      alert('This is required element');
    }
  }

}
