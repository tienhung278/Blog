import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../entities/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  authResponse: AuthResponse;

  constructor(private router: Router) {
    this.authResponse = { isAuthSuccessful: false };
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authResponse.isAuthSuccessful) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }    
  }
}
