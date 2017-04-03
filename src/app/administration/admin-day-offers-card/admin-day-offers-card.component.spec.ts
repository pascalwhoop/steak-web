import {async, ComponentFixture, TestBed, tick, fakeAsync} from "@angular/core/testing";
import {AdminDayOffersCardComponent} from "./admin-day-offers-card.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MdDialog, OverlayRef, MdDialogRef, MdDialogModule} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";

describe('AdminDayOffersCardComponent', () => {
    let component: AdminDayOffersCardComponent;
    let fixture: ComponentFixture<AdminDayOffersCardComponent>;

    //mocking a dialogRef for when we open our Md dialog with a button
    let mockDialogRef = new MdDialogRef(new OverlayRef(null, null, null, null), {});
    mockDialogRef.componentInstance = new OfferFormDialogComponent(null, null, null);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MdDialogModule],
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
});

let clickAddNewButton = function (component: AdminDayOffersCardComponent, fixture: ComponentFixture<AdminDayOffersCardComponent>) {
    let button = <HTMLElement> fixture.debugElement.queryAll(By.css('.add-new-button'))[0].nativeElement;
    button.click();
};
