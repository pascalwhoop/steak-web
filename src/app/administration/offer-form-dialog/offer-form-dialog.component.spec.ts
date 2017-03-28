import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OfferFormDialogComponent} from "./offer-form-dialog.component";
import {FormsModule} from "@angular/forms";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";
import {OfferCacheService} from "../../cache/offer-cache.service";

describe('OfferFormDialogComponent', () => {
    let component: OfferFormDialogComponent;
    let fixture: ComponentFixture<OfferFormDialogComponent>;
    let feedbackSpy = jasmine.createSpyObj('vfeedbackSpy', ['showMessageOnAnswer']);
    let cacheSpy = jasmine.createSpyObj('offerCache', ['find']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [
                {provide: AjaxVisualFeedbackService, useValue: feedbackSpy},
                {provide: OfferCacheService, useValue: cacheSpy},
                {provide: OffersApi, useClass: OffersApiStub}
            ],
            declarations: [OfferFormDialogComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfferFormDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
