import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MaterialModule} from "@angular/material";
import { AdminHomeComponent } from './admin-home.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {OffersApiStub} from "../../../testing/offers-api-stub";


describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;
  let titleService: PageTitleService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [PageTitleService,
        {provide: OffersApi, useClass: OffersApiStub}],
      declarations: [ AdminHomeComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;

    titleService = fixture.debugElement.injector.get(PageTitleService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set its page name to the pageTitleService', () => {
    expect(titleService.title).toBe('Administration');
  });
});
