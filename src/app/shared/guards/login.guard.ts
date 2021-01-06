import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {Guid} from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isGuid: boolean = false;
    try {
      isGuid = Guid.isGuid(Guid.parse(this.authService.getUserId()));
    } catch(err) {
      console.warn(err);
      this.router.navigate(['']);
    }
    return isGuid;
  }
}
