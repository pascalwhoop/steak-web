import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfferItemComponent } from './admin-offer-item.component';

describe('AdminOfferItemComponent', () => {
  let component: AdminOfferItemComponent;
  let fixture: ComponentFixture<AdminOfferItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfferItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
