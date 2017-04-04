import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {AdminHomeComponent} from "./admin-home.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {By} from "@angular/platform-browser";
import {MOCK_OFFERS} from "../../../testing/mock-data";
import {MdDialog, MdDialogModule, MdDialogRef, OverlayRef} from "@angular/material";
import * as _ from "lodash";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {FormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";
import {OfferCacheService} from "../../cache/offer-cache.service";
import {AdminDayOffersCardComponent} from "../admin-day-offers-card/admin-day-offers-card.component";

describe('AdminHomeComponent', () => {
    let component: AdminHomeComponent;
    let fixture: ComponentFixture<AdminHomeComponent>;
    let titleService: PageTitleService;
    let offerCacheSpy = jasmine.createSpyObj('offerCacheSpy', ['putMany', 'put', 'find']);



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MdDialogModule, FormsModule],
            providers: [
                PageTitleService,
                {provide: OffersApi, useClass: OffersApiStub},
                {provide: OfferCacheService , useValue: offerCacheSpy}
            ],
            declarations: [AdminHomeComponent, OfferFormDialogComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.configureTestingModule({}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminHomeComponent);
        component = fixture.componentInstance;
        spyOn(component, 'ensureOffersCached').and.stub(); //this gets called on ngOnInit but we don't want this to be called

        titleService = fixture.debugElement.injector.get(PageTitleService);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set its page name to the pageTitleService', () => {
        expect(titleService.title).toBe('Administration');
    });

    it('should generate the next three weeks as possible days to add stuff to', () => {
        expect(component.dates.length > 14).toBeTruthy()
    });

    // it('should call the filterOffersForDate method as often as there are days', () => {
    //
    // });

    it('should filter offers for a date given', () => {
        expect(component.filterOffersForDate(MOCK_OFFERS, new Date('2013-05-11T00:45:00.000Z')).length).toBe(3);
    });


});


let makeFourMockOffersForTomorrow = function () {
    //create a copy of mock offers
    let mockOffers = _.cloneDeep(MOCK_OFFERS);
    //set all dates to tomorrow
    mockOffers.forEach(offer => offer.date = new Date(new Date().getTime() + 1000 * 3600 * 24));
    return mockOffers;
};