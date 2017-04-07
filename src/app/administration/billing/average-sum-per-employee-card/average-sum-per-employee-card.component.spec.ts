import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSumPerEmployeeCardComponent } from './average-sum-per-employee-card.component';

describe('AverageSumPerEmployeeCardComponent', () => {
  let component: AverageSumPerEmployeeCardComponent;
  let fixture: ComponentFixture<AverageSumPerEmployeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageSumPerEmployeeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSumPerEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
