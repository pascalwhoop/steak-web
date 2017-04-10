import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingPageComponent} from './billing-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {PageTitleService} from '../../../shared/services/page-title.service';
import {OrdersApi} from '../../../shared/api/endpoints/OrdersApi';
import {OrdersApiStub} from '../../../../testing/orders-api-stub';
import {itemFrom} from '../../../../testing/testing-utility-functions';

describe('BillingPageComponent', () => {
    let component: BillingPageComponent;
    let fixture: ComponentFixture<BillingPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [PageTitleService,
                {provide: OrdersApi, useClass: OrdersApiStub},
            ],
            declarations: [BillingPageComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BillingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show a form to create PDF bills for the accounting department', () => {
        expect(itemFrom(fixture, 'steak-generate-billing-pdf-form-card')).toBeTruthy();
    });

    it('should show a card giving the average sum per employee', () => {
        expect(itemFrom(fixture, 'steak-average-sum-per-employee-card')).toBeTruthy();
    });

    it('should give a card showing the total sum of orders placed', () => {
        expect(itemFrom(fixture, 'steak-total-sum-card')).toBeTruthy();
    });

    it('should give a card, listing the top 3 most ordered meals', () => {
        expect(itemFrom(fixture, 'steak-top-three-meals-card')).toBeTruthy();
    });
});
