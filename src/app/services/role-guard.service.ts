import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = this.authService.getUserRole();
    const tokenExpired = this.authService.isAuthenticated();

    if (role === next.data.role && !tokenExpired) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}