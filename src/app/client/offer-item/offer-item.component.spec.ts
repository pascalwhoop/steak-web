import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MaterialModule} from "@angular/material";


import { OfferItemComponent } from './offer-item.component';

describe('OfferItemComponent', () => {
  let component: OfferItemComponent;
  let fixture: ComponentFixture<OfferItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ OfferItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferItemComponent);
    component = fixture.componentInstance;

    //set Input value to something
    let expectedOffer = {
      "_id": "58a47bd88fdd83084b5c88a4",
      "description": "Karottencremesuppe",
      "vegetarian": true,
      "price": 1,
      "time": "Fruehstueck",
      "date": new Date("2013-05-11T00:00:00.000Z"),
      "main_offer": true,
      "heat": 60
    };
    component.offer = expectedOffer;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
