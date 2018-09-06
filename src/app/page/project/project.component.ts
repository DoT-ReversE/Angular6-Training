import { Router } from '@angular/router';
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
    private _projService: ProjectService,
    private _router: Router
  ) {
      this.loadData();
  }

  ngOnInit() {
  }

  onDelClick(pkCode) {
    this._projService.deleteProject(pkCode).subscribe(
      result => {
        console.log(result);
        if (result.status) {
          this.loadData();
        }
      }
    );
  }

  onAddClick() {
    this._router.navigate(['project-form', 'NEW']);
  }

  onEditClick(pkCode) {
    this._router.navigate(['project-form', pkCode]);
  }

  loadData() {
    this._projService.getProject().subscribe(
      result => {
        this._data = result;
      }
    );
  }

}
