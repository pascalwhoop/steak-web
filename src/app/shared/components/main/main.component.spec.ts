import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MainComponent} from "./main.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PageTitleService} from "../../services/page-title.service";
import {UserService} from "../../../login/user.service";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [PageTitleService, {provide: UserService, useValue: {username: 'foo'}}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
