import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSummaryCardComponent } from './orders-summary-card.component';

describe('OrdersSummaryCardComponent', () => {
  let component: OrdersSummaryCardComponent;
  let fixture: ComponentFixture<OrdersSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
