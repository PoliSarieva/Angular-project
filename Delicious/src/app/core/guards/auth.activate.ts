import {Injectable} from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";


@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate {
    constructor(private userService: UserService, 
        public router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
         ):
          boolean 
          | UrlTree 
          | Observable<boolean | UrlTree> 
          | Promise<boolean | UrlTree> {
        //return this.userService.isLogged;
        if (this.userService.isLogged !== true) {
            this.router.navigate(['login']);
        }
        return true;
    }
}