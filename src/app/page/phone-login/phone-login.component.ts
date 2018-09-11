import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  phoneNumber: String = '';
  otp: String = '';

  constructor() { }

  ngOnInit() {
  }

  onGetOtpSubmit(_form: NgForm) {

  }

  onConfirmSubmit(_form: NgForm) {

  }

}
