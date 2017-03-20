import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {AdminHomeComponent} from "./admin-home.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {By} from "@angular/platform-browser";
import {MOCK_OFFERS} from "../../../testing/mock-data";


describe('AdminHomeComponent', () => {
    let component: AdminHomeComponent;
    let fixture: ComponentFixture<AdminHomeComponent>;
    let titleService: PageTitleService;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [PageTitleService,
                {provide: OffersApi, useClass: OffersApiStub}],
            declarations: [AdminHomeComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminHomeComponent);
        component = fixture.componentInstance;

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
        expect(component.dates.length > 10).toBeTruthy()
    });

    it('should list all offers under the right date', fakeAsync(() => {
        let mockOffers = JSON.parse(JSON.stringify(MOCK_OFFERS));
        mockOffers = mockOffers.forEach(offer => offer.date = new Date(new Date().getTime() + 1000 * 3600 * 24));
        component.offers = mockOffers;
        tick(); //let the templates filters run through
        let tomorrowList = fixture.debugElement.queryAll(By.css('.offers-list'))[0];
        let tomorrowItems = tomorrowList.queryAll(By.css('md-list-item'));
        expect(tomorrowItems.length).toBe(4);
        //day after tomorrow
        let daTomorrow = fixture.debugElement.queryAll(By.css('.offers-list'))[1];
        let daTomorrowItems = tomorrowList.queryAll(By.css('md-list-item'));
        expect(daTomorrowItems.length).toBe(0);
    }));

    it('should filter offers for a date given', ()=>{
        expect(component.filterOffersForDate(MOCK_OFFERS, new Date('2013-05-11T00:45:00.000Z')).length).toBe(3);
    });

    it('should open offer dialog to open on clicking "add new" for date', ()=>{
        expect(true).toBeFalsy();
    })
});
