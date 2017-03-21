import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDescriptionAutoCompleteComponent } from './offer-description-auto-complete.component';

describe('OfferDescriptionAutoCompleteComponent', () => {
  let component: OfferDescriptionAutoCompleteComponent;
  let fixture: ComponentFixture<OfferDescriptionAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDescriptionAutoCompleteComponent ]
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
