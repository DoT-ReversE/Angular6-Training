import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: String = '';
  dateOfBirth: Date = null;
  height: number = null;

  constructor() { }

  ngOnInit() {
  }

  onSubmitClick(_form: NgForm) {

  }
}
