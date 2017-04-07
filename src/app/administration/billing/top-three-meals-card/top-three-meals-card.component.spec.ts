import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeMealsCardComponent } from './top-three-meals-card.component';

describe('TopThreeMealsCardComponent', () => {
  let component: TopThreeMealsCardComponent;
  let fixture: ComponentFixture<TopThreeMealsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopThreeMealsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopThreeMealsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
