import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MaterialModule} from "@angular/material";
import {OfferItemComponent} from "./offer-item.component";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {MOCK_OFFER_ORDER_PAIRS} from "../../../testing/mock-data";
import Spy = jasmine.Spy;
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";
import {OrdersApiStub} from "../../../testing/orders-api-stub";


describe('OfferItemComponent', () => {
    let component: OfferItemComponent;
    let fixture: ComponentFixture<OfferItemComponent>;
    let orderSpy: Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                {provide: OffersApi, useClass: OffersApiStub},
                {provide: OrdersApi, useClass: OrdersApiStub}
            ],
            declarations: [OfferItemComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfferItemComponent);
        component = fixture.componentInstance;

        //orderSpy = spyOn(component.orderApi);

        component.ooPair = MOCK_OFFER_ORDER_PAIRS[0];

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
