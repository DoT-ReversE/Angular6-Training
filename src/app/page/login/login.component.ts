import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: String = '';
  userPassword: String = '';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(_form: NgForm) {
    if (_form.valid) {
      console.log(_form.value.userEmail);
      console.log(_form.value.userPassword);
    } else {
      console.log('Some required element');
    }
  }
}
