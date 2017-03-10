import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from '@angular/router'

@Component({
  selector: 'steak-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }

}
