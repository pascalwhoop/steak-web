import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {AdminHomeComponent} from "./admin-home.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {MOCK_OFFERS, MOCK_COMPLETE_DAY} from "../../../testing/mock-data";
import {MdDialogModule} from "@angular/material";
import * as _ from "lodash";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {FormsModule} from "@angular/forms";
import {OfferCacheService} from "../../cache/offer-cache.service";

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

    it('should replace previous offers and create new ones with onOfferChange', () => {
        component.offers = _.clone(MOCK_OFFERS);
        expect(component.offers.length).toBe(4);
        //adding an already existing object doesnt matter
        component.onOfferChange(_.clone(MOCK_OFFERS[0]));
        expect(component.offers.length).toBe(4);

        //adding a new offer increases count by 1
        component.onOfferChange(MOCK_COMPLETE_DAY[6]);
        expect(component.offers.length).toBe(5);
    });


});


let makeFourMockOffersForTomorrow = function () {
    //create a copy of mock offers
    let mockOffers = _.cloneDeep(MOCK_OFFERS);
    //set all dates to tomorrow
    mockOffers.forEach(offer => offer.date = new Date(new Date().getTime() + 1000 * 3600 * 24));
    return mockOffers;
};