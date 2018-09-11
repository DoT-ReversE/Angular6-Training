import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  _hasLoginState = true;

  constructor(
    private _angularFirebaseAuth: AngularFireAuth,
    private _router: Router
  ) {
      _angularFirebaseAuth.authState.subscribe(
        result => {
          if (result) {
            this._hasLoginState = true;
          } else {
            this._hasLoginState = false;
          }
        }
    );
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this._hasLoginState) {
        return this._hasLoginState;
      } else {
        this._router.navigate(['login']);
      }
  }
}
