import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OfferFormDialogComponent} from "./offer-form-dialog.component";
import {FormsModule} from "@angular/forms";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";
import {OfferCacheService} from "../../cache/offer-cache.service";
import {MdDialogRef} from "@angular/material";
import {MOCK_OFFERS} from "../../../testing/mock-data";
import {EditMode} from "../../core/util/util.service";

describe('OfferFormDialogComponent', () => {
    let component: OfferFormDialogComponent;
    let fixture: ComponentFixture<OfferFormDialogComponent>;
    let feedbackSpy = jasmine.createSpyObj('vfeedbackSpy', ['showMessageOnAnswer']);
    let cacheSpy = jasmine.createSpyObj('offerCache', ['find']);
    let mockMdDialogRef = {
        config: {
            data: {
                date: new Date(),
                offer: MOCK_OFFERS[0],
                editMode: EditMode.UPDATE
            }
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [
                {provide: MdDialogRef, useValue: mockMdDialogRef},
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

    it('should initiate the dialog with the mock data of the config', () => {
        expect(component.offer).toEqual(mockMdDialogRef.config.data.offer);
    });

    it('should should apply the date from the mock data', () => {
        expect(component.date).toEqual(mockMdDialogRef.config.data.date);
    });
});
