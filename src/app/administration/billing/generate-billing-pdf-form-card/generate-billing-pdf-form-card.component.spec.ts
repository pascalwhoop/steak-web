import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBillingPdfFormCardComponent } from './generate-billing-pdf-form-card.component';

describe('GenerateBillingPdfFormCardComponent', () => {
  let component: GenerateBillingPdfFormCardComponent;
  let fixture: ComponentFixture<GenerateBillingPdfFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBillingPdfFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBillingPdfFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
