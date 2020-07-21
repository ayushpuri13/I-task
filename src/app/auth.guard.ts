import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
constructor(private Api: ApiService,
    private myRoute: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.Api.token){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }

}
