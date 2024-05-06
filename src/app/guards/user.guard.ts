import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
 
@Injectable ({providedIn: 'root'})

export class UserGuard implements CanActivate {
    constructor(private route: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {
        if(localStorage.getItem ("logado") === "false") {
        this.route.navigate(['login'])
        return false
       }
         return true
    }

}