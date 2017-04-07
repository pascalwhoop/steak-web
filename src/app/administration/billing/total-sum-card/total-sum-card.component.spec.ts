import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSumCardComponent } from './total-sum-card.component';

describe('TotalSumCardComponent', () => {
  let component: TotalSumCardComponent;
  let fixture: ComponentFixture<TotalSumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalSumCardComponent ]
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
