import { Project } from './../../model/project';
import { ProjectService } from './../../service/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  _data: Project[];

  constructor(
    private _projService: ProjectService
  ) {
    this._projService.getProject().subscribe(
      result => {
        this._data = result;
      }
    );
  }

  ngOnInit() {
  }

}
