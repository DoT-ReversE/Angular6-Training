import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _http: HttpClient) { }

  getFoods(): Observable<any> {
    return this._http.get('http://train-api.pnpsw.com/api/v1/project');
  }
}
