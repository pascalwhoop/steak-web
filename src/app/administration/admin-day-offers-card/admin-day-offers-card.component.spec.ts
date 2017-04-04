import {async, ComponentFixture, TestBed, tick, fakeAsync} from "@angular/core/testing";
import {AdminDayOffersCardComponent} from "./admin-day-offers-card.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MdDialog, OverlayRef, MdDialogRef, MdDialogModule, MdMenuModule} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {FormsModule} from "@angular/forms";
import {makeFourMockOffersForTomorrow} from "../../../testing/testing-utility-functions";

describe('AdminDayOffersCardComponent', () => {
    let component: AdminDayOffersCardComponent;
    let fixture: ComponentFixture<AdminDayOffersCardComponent>;

    //mocking a dialogRef for when we open our Md dialog with a button
    let mockDialogRef = new MdDialogRef(new OverlayRef(null, null, null, null), {});
    mockDialogRef.componentInstance = new OfferFormDialogComponent(null, null, null);

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
        spyOn(component.dialog, 'open').and.returnValue(mockDialogRef);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open the dialog on clicking the button', fakeAsync(() => {
        expect(component.dialog.open).toHaveBeenCalledTimes(0);
        clickAddNewButton(component, fixture);
        fixture.detectChanges();
        tick();
        expect(component.dialog.open).toHaveBeenCalled();
    }));

    it('should list all offers under the right date', fakeAsync(() => {
        component.offers = makeFourMockOffersForTomorrow();
        expect(component.offers.length).toBe(4);
        fixture.detectChanges();
        tick(); //let the templates filters run through
        let tomorrowItems = fixture.debugElement.queryAll(By.css('steak-admin-offer-item'));
        expect(tomorrowItems.length).toBe(4);
    }));
});

let clickAddNewButton = function (component: AdminDayOffersCardComponent, fixture: ComponentFixture<AdminDayOffersCardComponent>) {
    let button = <HTMLElement> fixture.debugElement.queryAll(By.css('.add-new-button'))[0].nativeElement;
    button.click();
};
