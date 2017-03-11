import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "./user.service";
import {Router} from "@angular/router"
import {environment} from "../../environments/environment";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) {

  }

  /**
   * uses the userService to determine if we have a JWT stored
   * @param next
   * @param state
   * @returns {boolean}
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //on development, we don't need to authorise a user. 
    if(!environment.authorisation) return true;

    let loggedIn = this.userService.isLoggedIn();
    if(!loggedIn) this.router.navigateByUrl('login');
    return loggedIn;
  }
}
