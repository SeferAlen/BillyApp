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
    const authenticated = this.authService.isAuthenticated();

    if (role === next.data.role && authenticated) {
      return true;
    }

    // navigate to not found page
    this._router.navigate(['/login']);
    return false;
  }
}