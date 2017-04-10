import {async, ComponentFixture, fakeAsync, TestBed} from "@angular/core/testing";
import {QuickDefaultsCreateButtonComponent} from "./quick-defaults-create-button.component";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {Observable} from "rxjs";
import {TdDialogService, TdLoadingService} from "@covalent/core";
import {DefaultOffersService} from "../default-offers-service/default-offers.service";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";

describe('QuickDefaultsCreateButtonComponent', () => {
    let component: QuickDefaultsCreateButtonComponent;
    let fixture: ComponentFixture<QuickDefaultsCreateButtonComponent>;
    let loadingSpy = jasmine.createSpyObj('loading', ['register', 'resolve', 'create']);
    let feedbackSpy = jasmine.createSpyObj('snack', ['showMessageOnAnswer']);


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuickDefaultsCreateButtonComponent],
            providers: [
                DefaultOffersService,
                {provide: TdLoadingService, useValue: loadingSpy},
                {provide: AjaxVisualFeedbackService, useValue: feedbackSpy},
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


    afterEach(() => {
        //resetAllCalls to spys
        loadingSpy.register.calls.reset();
        loadingSpy.resolve.calls.reset();
        loadingSpy.create.calls.reset();
        feedbackSpy.showMessageOnAnswer.calls.reset();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should ask for confirmation before sending off 5 http requests', () => {
        spyOn(component.simpleDialog, 'openConfirm').and.callThrough();
        component.createDefaults();
        expect(component.simpleDialog.openConfirm).toHaveBeenCalledTimes(1); 
    });

    it('should call http with salads and breakfast offers', fakeAsync(() => {
        let createSpy = spyOn(component.offersApi, 'offerPost').and.callThrough();
        expect(createSpy).toHaveBeenCalledTimes(0);
        component.createDefaults();
        expect(createSpy).toHaveBeenCalledTimes(5);
    }));

    it('should call the loading and feedback services ', () => {
        component.createDefaults();
        expect(loadingSpy.register).toHaveBeenCalledTimes(1);
        expect(loadingSpy.resolve).toHaveBeenCalledTimes(1);
        expect(feedbackSpy.showMessageOnAnswer).toHaveBeenCalledTimes(1);
    });
});


let tdDialogServiceStub = {
    openConfirm: () => {
        return {
            afterClosed: () => {
                return Observable.of(true);
            }
        }
    }
};