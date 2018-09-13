import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  phoneNumber: String = '';
  otp: String = '';
  confirmResult;

  constructor(
    private _afauth: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onGetOtpSubmit(_form: NgForm) {
    console.log('+66' + _form.value.phoneNumber.substr(1));
    this._afauth.auth.signInWithPhoneNumber(
      '+66' + _form.value.phoneNumber,
      new firebase.auth.RecaptchaVerifier('recapt-id')
    ).then(confirmationResult => {
      this.confirmResult = confirmationResult;
    }).catch(error => {
      console.log(error);
    });
  }

  onConfirmSubmit(_form: NgForm) {
    this.confirmResult.confirm(this.otp).then((resp) => {
      this._router.navigate(['admin']);
    }).catch(error => {
      console.log(error);
    });
  }

}
