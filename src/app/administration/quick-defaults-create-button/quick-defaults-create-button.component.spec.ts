import {async, ComponentFixture, TestBed, fakeAsync} from "@angular/core/testing";
import {QuickDefaultsCreateButtonComponent} from "./quick-defaults-create-button.component";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {Observable} from "rxjs";
import {TdDialogService} from "@covalent/core";

fdescribe('QuickDefaultsCreateButtonComponent', () => {
    let component: QuickDefaultsCreateButtonComponent;
    let fixture: ComponentFixture<QuickDefaultsCreateButtonComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuickDefaultsCreateButtonComponent],
            providers: [
                {provide: OffersApi, useClass: OffersApiStub},
                {provide: TdDialogService, useValue: tdDialogServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuickDefaultsCreateButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call http with salads and breakfast offers', fakeAsync(() => {
        let createSpy = spyOn(component.offersApi, 'offerPost').and.callThrough();
        expect(createSpy).toHaveBeenCalledTimes(0);
        component.createDefaults();
        expect(createSpy).toHaveBeenCalledTimes(5);
    }));
});


let tdDialogServiceStub = {
    openConfirm: () =>{
        return {afterClosed: () =>{
            return Observable.of(true);
        }}
    }
};