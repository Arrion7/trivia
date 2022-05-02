import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../help/constants';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const user = localStorage.getItem(Constants.UserName);
    if(user && user.length>0)
    {
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
    
  }
}
