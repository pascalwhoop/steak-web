import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryTableComponent } from './orders-history-table.component';

describe('OrdersHistoryTableComponent', () => {
  let component: OrdersHistoryTableComponent;
  let fixture: ComponentFixture<OrdersHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHistoryTableComponent ]
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
