import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  weight;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(_form: NgForm) {

  }
}
