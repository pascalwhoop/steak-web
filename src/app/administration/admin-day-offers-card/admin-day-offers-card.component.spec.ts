import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {AdminDayOffersCardComponent} from "./admin-day-offers-card.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MdDialog, MdDialogModule, MdDialogRef, MdMenuModule, OverlayRef} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {FormsModule} from "@angular/forms";
import {makeFourMockOffersForTomorrow} from "../../../testing/testing-utility-functions";
import {MOCK_COMPLETE_DAY, MOCK_OFFERS} from "../../../testing/mock-data";
import {Observable} from "rxjs";

describe('AdminDayOffersCardComponent', () => {
    let component: AdminDayOffersCardComponent;
    let fixture: ComponentFixture<AdminDayOffersCardComponent>;
    let dialogOpenSpy;

    //mocking a dialogRef for when we open our Md dialog with a button
    let mockDialogRef = new MdDialogRef(new OverlayRef(null, null, null, null), {});
    mockDialogRef.componentInstance = new OfferFormDialogComponent(null, null, null, null);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MdDialogModule, FormsModule, MdMenuModule],
            declarations: [AdminDayOffersCardComponent],
            providers: [
                MdDialog,

            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminDayOffersCardComponent);
        component = fixture.componentInstance;
        dialogOpenSpy = spyOn(component.dialog, 'open').and.returnValue(mockDialogRef);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('the create new button', () => {
        it('should open the dialog on clicking the button', fakeAsync(() => {
            expect(component.dialog.open).toHaveBeenCalledTimes(0);
            clickAddNewButton(component, fixture);
            fixture.detectChanges();
            tick();
            expect(component.dialog.open).toHaveBeenCalled();
        }));

        it('should emit the newly created offer to the eventEmitter after dialog close', fakeAsync(() => {
            //creating subscription spy
            let subscriberSpy = jasmine.createSpy('subscriberSpy', () => {});
            //when the method that is tested calls the spy, we expect something that has a functino afterClosed which then returns an obs
            dialogOpenSpy.and.returnValue({afterClosed: () => Observable.of(MOCK_OFFERS[0])});
            //we expect the object to notify the eventEmitter
            component.offerEventEmitter.subscribe(subscriberSpy);
            component.createNewFor(new Date());

            tick();
            fixture.detectChanges();
            expect(subscriberSpy).toHaveBeenCalled();
        }));
    });


    it('should list all offers under the right date', fakeAsync(() => {
        component.offers = makeFourMockOffersForTomorrow();
        expect(component.offers.length).toBe(5);
        fixture.detectChanges();
        tick(); //let the templates filters run through
        let tomorrowItems = fixture.debugElement.queryAll(By.css('steak-admin-offer-item'));
        expect(tomorrowItems.length).toBe(5);
    }));

    it('should have a red background when not all minimum meals are offered', () => {
        //days always have: salad, breakfast, 2 main lunches of which one must be vegetarian
        expect(component.dayIsComplete(MOCK_OFFERS)).toBeFalsy();
        expect(component.dayIsComplete(MOCK_COMPLETE_DAY)).toBeTruthy();

        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 0, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 1, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 2, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 3, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 4, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 5, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 6, 1))).toBeFalsy();
        expect(component.dayIsComplete(arrWithout(MOCK_COMPLETE_DAY, 7, 1))).toBeFalsy();
        expect(MOCK_COMPLETE_DAY.length).toBe(8);

    });
});

let clickAddNewButton = function (component: AdminDayOffersCardComponent, fixture: ComponentFixture<AdminDayOffersCardComponent>) {
    let button = <HTMLElement> fixture.debugElement.queryAll(By.css('.add-new-button'))[0].nativeElement;
    button.click();
};

/**
 * removes the indexes from the array and returns a new one
 * @param arr
 * @param start
 * @param end
 */
let arrWithout = function (arr, start, count) {
    let retArr = [].concat(arr);
    retArr.splice(start, count);
    return retArr;
};
