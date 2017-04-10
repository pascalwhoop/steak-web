import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenerateBillingPdfFormCardComponent} from './generate-billing-pdf-form-card.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GenerateBillingPdfFormCardComponent', () => {
    let component: GenerateBillingPdfFormCardComponent;
    let fixture: ComponentFixture<GenerateBillingPdfFormCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GenerateBillingPdfFormCardComponent],
            schemas: [NO_ERRORS_SCHEMA],
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
