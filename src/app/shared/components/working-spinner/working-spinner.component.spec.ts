import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingSpinnerComponent } from './working-spinner.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('WorkingSpinnerComponent', () => {
  let component: WorkingSpinnerComponent;
  let fixture: ComponentFixture<WorkingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingSpinnerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
