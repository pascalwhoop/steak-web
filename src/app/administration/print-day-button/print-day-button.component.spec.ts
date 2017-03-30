import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDayButtonComponent } from './print-day-button.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('PrintDayButtonComponent', () => {
  let component: PrintDayButtonComponent;
  let fixture: ComponentFixture<PrintDayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDayButtonComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
