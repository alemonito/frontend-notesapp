import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SageGuard implements CanActivate {
  token: string = "";

  constructor( private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    
      this.token = localStorage.getItem("token") ? localStorage.getItem("token") || "":"";

      if (this.token == "") {
        this.router.navigateByUrl("/login");
        return false;
      }
      return true;
  
}

}
