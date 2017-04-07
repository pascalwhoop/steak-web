import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";

import {TotalSumCardComponent} from "./total-sum-card.component";
import {NO_ERRORS_SCHEMA, SimpleChange} from "@angular/core";
import {CovalentCoreModule} from "@covalent/core";
import {MOCK_ORDERS} from "../../../../testing/mock-data";
import {itemFrom} from "../../../../testing/testing-utility-functions";

describe('TotalSumCardComponent', () => {
    let component: TotalSumCardComponent;
    let fixture: ComponentFixture<TotalSumCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CovalentCoreModule],
            declarations: [TotalSumCardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TotalSumCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should sum up the costs over all orders', fakeAsync(() => {
        component.orders = MOCK_ORDERS.concat(MOCK_ORDERS, MOCK_ORDERS); //12.25 * 3 = 36.75
        component.ngOnChanges({orders: {currentValue: component.orders} as SimpleChange});
        fixture.detectChanges();
        tick();

        let sumText = itemFrom(fixture, '.md-headline').nativeElement.innerHTML;
        expect(sumText).toBe('36.75 €')
    }));
});
