import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DayOffersCardComponent} from './day-offers-card.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MOCK_OFFER_ORDER_PAIRS, MOCK_OFFERS} from '../../../testing/mock-data';
import {itemFrom, itemsFrom} from '../../../testing/testing-utility-functions';

describe('DayOffersCardComponent', () => {
    let component: DayOffersCardComponent;
    let fixture: ComponentFixture<DayOffersCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DayOffersCardComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DayOffersCardComponent);
        component = fixture.componentInstance;
        component.day = {date: MOCK_OFFER_ORDER_PAIRS[0].offer.date, offerOrderPairs: MOCK_OFFER_ORDER_PAIRS};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display two offers with one order each', () => {
        fixture.whenStable()
            .then(() => {
                expect(itemsFrom(fixture, 'steak-offer-item').length).toBe(2);
            });
    });

    it('should have the day of the week and date in header be the same as the first offer', () => {
        fixture.whenStable()
            .then(() => {
                expect(itemFrom(fixture, 'md-card-title').nativeElement.innerHTML).toBe('Wednesday');
                expect(itemFrom(fixture, 'md-card-subtitle').nativeElement.innerHTML).toBe('22.02');
            });
    });

    it('should build a readable date from an offer', () => {
        expect(component.makeDaySubtitle(MOCK_OFFERS[0].date)).toBe('11.05');
        expect(component.makeDaySubtitle(MOCK_OFFERS[1].date)).toBe('11.05');
        expect(component.makeDaySubtitle(MOCK_OFFERS[2].date)).toBe('11.05');
        expect(component.makeDaySubtitle(MOCK_OFFERS[3].date)).toBe('04.10');
    });
});
