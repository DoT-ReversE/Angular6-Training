import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  _apiUrl = `${environment.hostUrl}/api/v1/project`;

  constructor(private _http: HttpClient) { }

  getProject(): Observable<Project[]> {
    return this._http.get<Project[]>(this._apiUrl);
  }

  addProject(body): Observable<any> {
    return this._http.post(this._apiUrl, body,
      { headers:
        {
          'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ29kZSI6Ik5vb3RpM3ciLCJ1c2VyTmFtZSI6IkNob25uaXNhIiwidXNlckxhc3ROYW1lIjoiVGhpZW1idW5kaXQiLCJ1c2VyRW1haWwiOiJ0aWV3d2FfaGFoYUBob3RtYWlsLmNvbSJ9.Gnb5Wx3jDi-6IVtGpfG64atQMaX6brBjRozitU0nlcQ',
          'Content-Type': 'application/json'
        }
      }
    );
  }

  updateProject(body): Observable<any> {
    return this._http.put(this._apiUrl, body,
      { headers:
        {
          'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ29kZSI6Ik5vb3RpM3ciLCJ1c2VyTmFtZSI6IkNob25uaXNhIiwidXNlckxhc3ROYW1lIjoiVGhpZW1idW5kaXQiLCJ1c2VyRW1haWwiOiJ0aWV3d2FfaGFoYUBob3RtYWlsLmNvbSJ9.Gnb5Wx3jDi-6IVtGpfG64atQMaX6brBjRozitU0nlcQ',
          'Content-Type': 'application/json'
        }
      }
    );
  }

  deleteProject(key): Observable<any> {
    return this._http.delete(`${this._apiUrl}/${key}`);
  }

  getProjectByPkCode(pkCode): Observable<any> {
    return this._http.get<Project>(`${this._apiUrl}/findByID/${pkCode}`,
      { headers:
        {
          'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ29kZSI6Ik5vb3RpM3ciLCJ1c2VyTmFtZSI6IkNob25uaXNhIiwidXNlckxhc3ROYW1lIjoiVGhpZW1idW5kaXQiLCJ1c2VyRW1haWwiOiJ0aWV3d2FfaGFoYUBob3RtYWlsLmNvbSJ9.Gnb5Wx3jDi-6IVtGpfG64atQMaX6brBjRozitU0nlcQ',
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
