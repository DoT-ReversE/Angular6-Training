import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  _hasLoginState = true;

  constructor(
    private _angularFirebaseAuth: AngularFireAuth,
    private _router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._angularFirebaseAuth.authState.pipe(
        take(1),
        map(resp => !!resp),
        tap(resp => {
          if (!resp) {
            this._router.navigate(['login']);
          }
        })
      );
  }
}
