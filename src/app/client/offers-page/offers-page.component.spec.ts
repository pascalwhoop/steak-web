import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {MaterialModule} from "@angular/material";
import {OffersPageComponent} from "./offers-page.component";
import {PageTitleService} from "../../shared/services/page-title.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {MOCK_OFFERS} from "../../../testing/mock-data";
import Spy = jasmine.Spy;
import {Observable, Subscriber} from "rxjs";
import {By} from "@angular/platform-browser";

describe('OffersPageComponent', () => {
    let component: OffersPageComponent;
    let fixture: ComponentFixture<OffersPageComponent>;
    let titleService: PageTitleService;
    let offersService: OffersApi;
    let offersSpy: Spy;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [MaterialModule],
            providers: [PageTitleService,//its ok since its a really simple service and we are spying on it
                OffersApi],
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
        offersSpy = spyOn(component.offersApi, 'offerGet').and.returnValues(Observable.create((s: Subscriber<any>)=> s.next((MOCK_OFFERS))));


        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set its page name to the pageTitleService', () => {
        expect(titleService.title).toBe('Offers');
    });

    it('should fetch all offers of the future', () => {
        expect(offersSpy.calls.mostRecent()).toBeTruthy();
    });

    it('should display offers in list', fakeAsync(()=>{
        tick();
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.offer-list'));
        //check that offer list is displayed
        expect(el.children.length).toBe(4);
    }))
});
