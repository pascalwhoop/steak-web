import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {OfferItemComponent} from "./offer-item.component";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {MOCK_OFFER_ORDER_PAIRS, MOCK_OFFERS} from "../../../testing/mock-data";
import Spy = jasmine.Spy;
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";
import {OrdersApiStub} from "../../../testing/orders-api-stub";
import {Observable} from "rxjs";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";


describe('OfferItemComponent', () => {
    let component: OfferItemComponent;
    let fixture: ComponentFixture<OfferItemComponent>;
    let orderSpy: Spy;
    let feedbackSpy = jasmine.createSpyObj('snack', ['showMessageOnAnswer']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                {provide: OffersApi, useClass: OffersApiStub},
                {provide: AjaxVisualFeedbackService, useValue: feedbackSpy},
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

    //TODO fix test: It complains about throwing an error yet that is what we want. 
    xit('should give feedback on fail', () => {
        let obs = new Observable(sub => sub.error('fail'));
        spyOn(component.orderApi, 'orderPost').and.returnValue(obs);
        feedbackSpy.showMessageOnAnswer.and.returnValue(Observable.of(true));
        component.addOrder(MOCK_OFFERS[0]);
        expect(feedbackSpy.showMessageOnAnswer).toHaveBeenCalledWith(null, 'Order failed', obs,);
    });
});
