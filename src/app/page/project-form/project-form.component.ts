import { ProjectService } from './../../service/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  _obj: Project = <Project>{};
  _action;

  constructor(
    private _projService: ProjectService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      params => {
        this._action = params.pkCode;
        this._projService.getProjectByPkCode(params.pkCode).subscribe(
          result => {
            if (result) {
              this._obj = result;
            }
          }
        );
      }
    );
  }

  ngOnInit() {
  }

  onSubmitClick() {
    if (this._action === 'NEW') {
      this._projService.addProject(this._obj).subscribe(
        result => {
          if (result.status) {
            this._router.navigate(['project']);
          } else {
            alert(result.message.code + ':' + result.message.sqlMessage);
          }
          console.log(result);
        }
        );
    } else {
      this._projService.updateProject(this._obj).subscribe(
        result => {
          if (result.status) {
            this._router.navigate(['project']);
          } else {
            alert(result.message.code + ':' + result.message.sqlMessage);
          }
          console.log(result);
        }
      );
    }
  }

  onBackClick() {
    this._router.navigate(['project']);
  }

}
