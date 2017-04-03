import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOffersCardComponent } from './day-offers-card.component';

describe('DayOffersCardComponent', () => {
  let component: DayOffersCardComponent;
  let fixture: ComponentFixture<DayOffersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOffersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOffersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
