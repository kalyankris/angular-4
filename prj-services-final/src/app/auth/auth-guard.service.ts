import { AuthSerice } from './auth.service';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authSerice:AuthSerice){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authSerice.loggedIn;
  }
}
