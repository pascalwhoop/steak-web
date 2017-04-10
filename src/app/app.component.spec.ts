/* tslint:disable:no-unused-variable */

import {async, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {RouterOutletStubComponent} from "../testing/router-outlet-stub";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RouterOutletStubComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
