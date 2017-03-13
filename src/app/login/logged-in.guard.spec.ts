import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';
import {UserService} from "./user.service";
import {Router} from "@angular/router"


describe('LoggedInGuard', () => {
  let userServiceSpy = jasmine.createSpyObj('UserService', ['isLoggedIn']);
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInGuard,
        {provide: UserService, use: userServiceSpy},
        {provide: Router, use: routerSpy}]
    });
  });

  it('should ...', inject([LoggedInGuard], (guard: LoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
