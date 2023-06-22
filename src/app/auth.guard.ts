import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private rourt:Router,private registerService:RegisterService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.registerService.isloogedin()){

        return true;
      }
    else{
      const navigationExtras: NavigationExtras = {
        queryParams: { 'redirectUrl': state.url } // Store the original URL as a query parameter
      };
      alert("Not logedin yet login to continue")
      this.rourt.navigate(['login'],navigationExtras)
      return false;
    }
  }

}
