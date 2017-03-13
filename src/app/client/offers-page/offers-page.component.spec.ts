import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {OffersPageComponent} from "./offers-page.component";
import {PageTitleService} from "../../shared/services/page-title.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {MOCK_OFFERS} from "../../../testing/mock-data";
import Spy = jasmine.Spy;
import {Observable, Subscriber} from "rxjs";
import {By} from "@angular/platform-browser";
import {UsersApi} from "../../shared/api/endpoints/UsersApi";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {UsersApiStub} from "../../../testing/users-api-stub";
import {OrdersApiStub} from "../../../testing/orders-api-stub";
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";

describe('OffersPageComponent', () => {
    let component: OffersPageComponent;
    let fixture: ComponentFixture<OffersPageComponent>;
    let titleService: PageTitleService;
    let offersSpy: Spy;
    let ordersSpy: Spy;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [PageTitleService,
                {provide: OffersApi, useClass: OffersApiStub},
                {provide: OrdersApi, useClass: OrdersApiStub},
                {provide: UsersApi, useClass: UsersApiStub}
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

    it('should display offers in list', fakeAsync(()=>{
        tick();
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.day-tile'));
        console.log(el);
        //check that offer list is displayed
        expect(el.children.length).toBe(4);
    }));

    it('should group the incoming offers in days', ()=>{
      // let groups = component.mapPairsToDays(MOCK_OFFERS);
      // expect(groups[0].length).toBe(3);
      // expect(groups[1].length).toBe(1);
    });

    it('should build a week day from an offer',()=>{
        expect(component.makeDayTitle(MOCK_OFFERS[0])).toBe("Saturday");
    });

    it('should build a readable date from an offer', ()=>{
        expect(component.makeDaySubtitle(MOCK_OFFERS[0])).toBe("11.05");
        expect(component.makeDaySubtitle(MOCK_OFFERS[1])).toBe("11.05");
        expect(component.makeDaySubtitle(MOCK_OFFERS[2])).toBe("11.05");
        expect(component.makeDaySubtitle(MOCK_OFFERS[3])).toBe("04.10");
    });
});
