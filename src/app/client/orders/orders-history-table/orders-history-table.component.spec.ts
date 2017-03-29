import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryTableComponent } from './orders-history-table.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('OrdersHistoryTableComponent', () => {
  let component: OrdersHistoryTableComponent;
  let fixture: ComponentFixture<OrdersHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHistoryTableComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
