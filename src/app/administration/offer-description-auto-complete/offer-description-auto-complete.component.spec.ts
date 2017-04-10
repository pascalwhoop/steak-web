import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfferDescriptionAutoCompleteComponent} from './offer-description-auto-complete.component';
import {MdAutocompleteModule} from '@angular/material';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {OfferCacheService} from '../../cache/offer-cache.service';

describe('OfferDescriptionAutoCompleteComponent', () => {
  let component: OfferDescriptionAutoCompleteComponent;
  let fixture: ComponentFixture<OfferDescriptionAutoCompleteComponent>;
  let cacheSpy = jasmine.createSpyObj('offerCache', ['find']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdAutocompleteModule],
      providers: [{provide: OfferCacheService, useValue: cacheSpy}],
      declarations: [ OfferDescriptionAutoCompleteComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDescriptionAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
