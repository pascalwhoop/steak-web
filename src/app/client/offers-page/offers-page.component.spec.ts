import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {OffersPageComponent} from "./offers-page.component";
import {PageTitleService} from "../../shared/services/page-title.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {MOCK_OFFER_ORDER_PAIRS, MOCK_OFFERS, MOCK_ORDERS} from "../../../testing/mock-data";
import {UsersApi} from "../../shared/api/endpoints/UsersApi";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {UsersApiStub} from "../../../testing/users-api-stub";
import {OrdersApiStub} from "../../../testing/orders-api-stub";
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";
import {UserService} from "../../login/user.service";
import * as _ from "lodash";
import {itemFrom, itemsFrom, setDatesForOfferOrdersPairs} from "../../../testing/testing-utility-functions";
import {Observable} from "rxjs";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";
import Spy = jasmine.Spy;

describe('OffersPageComponent', () => {
    let component: OffersPageComponent;
    let fixture: ComponentFixture<OffersPageComponent>;
    let titleService: PageTitleService;
    let offersSpy: Spy;
    let ordersSpy: Spy;
    let feedbackSpy = jasmine.createSpyObj('snack', ['showFetchError']);

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [PageTitleService,
                {provide: OffersApi, useClass: OffersApiStub},
                {provide: OrdersApi, useClass: OrdersApiStub},
                {provide: AjaxVisualFeedbackService, useValue: feedbackSpy},
                {provide: UsersApi, useClass: UsersApiStub},
                {provide: UserService, useValue: {username: 'xxx'}}
            ],
            declarations: [OffersPageComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        //create component test elements
        fixture = TestBed.createComponent(OffersPageComponent);
        component = fixture.componentInstance;

        //spy on things and get services
        titleService = fixture.debugElement.injector.get(PageTitleService);
        offersSpy = spyOn(component.offersApi, 'offersGet').and.callThrough();
        ordersSpy = spyOn(component.ordersApi, 'ordersGET').and.callThrough();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set its page name to the pageTitleService', () => {
        expect(titleService.title).toBe('Offers');
    });

    it('should fetch all offers and orders of the future', () => {
        expect(offersSpy.calls.mostRecent()).toBeTruthy();
        expect(ordersSpy.calls.mostRecent()).toBeTruthy();
    });

    it('should map pairs to dates and return an array of mappings', () => {
        let mappings = component.mapPairsToDays(MOCK_OFFER_ORDER_PAIRS);
        expect(mappings.length).toBe(1);
        expect(mappings[0].offerOrderPairs.length).toBe(2);
    });

    it('should display daily offers cards in a grid', fakeAsync(() => {
        component.offerOrderData = component.mapPairsToDays(MOCK_OFFER_ORDER_PAIRS);
        //let UI update
        tick();
        fixture.detectChanges();
        let elements = itemsFrom(fixture, 'steak-day-offers-card');
        expect(elements.length).toBe(1);

        //try again with changed dates
        let anotherTwo = component.mapPairsToDays(setDatesForOfferOrdersPairs(_.cloneDeep(MOCK_OFFER_ORDER_PAIRS), '2016-05-03'));
        component.offerOrderData = component.offerOrderData.concat(anotherTwo);
        //let UI update
        tick();
        fixture.detectChanges();
        elements = itemsFrom(fixture, 'steak-day-offers-card');
        expect(elements.length).toBe(2);
    }));

    it('should group the offers and orders into objects for each offer', () => {
        //our mock data includes 2 orders that match the first offer in the offer mock data. therefore, there should be 1 offer with 2 orders
        let pairs = component.makeOfferOrderPairs(MOCK_OFFERS, MOCK_ORDERS);
        expect(pairs[0].orders.length).toBe(2);

    });

    it('should show nothing here when there are no offers or connection failed', fakeAsync(() => {
        tick();
        //expect nothing here not to be visible at beginning, because we have elements.
        expect(itemFrom(fixture, 'steak-nothing-here')).toBeFalsy();
        //now let's override the return of the spy and make it fail
        offersSpy.and.returnValue(new Observable(sub => sub.error({fail: true})));
        component.fetchData();
        fixture.detectChanges();
        tick();
        expect(feedbackSpy.showFetchError).toHaveBeenCalled();
        expect(itemFrom(fixture, 'steak-nothing-here')).toBeTruthy()


    }));
});
