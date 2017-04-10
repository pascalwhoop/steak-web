import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AverageSumPerEmployeeCardComponent} from './average-sum-per-employee-card.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CovalentCoreModule} from '@covalent/core';

describe('AverageSumPerEmployeeCardComponent', () => {
  let component: AverageSumPerEmployeeCardComponent;
  let fixture: ComponentFixture<AverageSumPerEmployeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovalentCoreModule],
      declarations: [ AverageSumPerEmployeeCardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
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
