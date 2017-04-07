import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSumCardComponent } from './total-sum-card.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {CovalentCoreModule} from "@covalent/core";

describe('TotalSumCardComponent', () => {
  let component: TotalSumCardComponent;
  let fixture: ComponentFixture<TotalSumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovalentCoreModule],
      declarations: [ TotalSumCardComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
