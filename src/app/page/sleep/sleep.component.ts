import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {

  hour;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(_form: NgForm) {

  }
}
