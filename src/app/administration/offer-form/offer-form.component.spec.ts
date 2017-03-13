import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OfferFormComponent} from "./offer-form.component";
import {FormsModule} from "@angular/forms";
import {OffersApiStub} from "../../../testing/offers-api-stub";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";

describe('OfferFormComponent', () => {
    let component: OfferFormComponent;
    let fixture: ComponentFixture<OfferFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [
                {provide: OffersApi, useClass: OffersApiStub}
            ],
            declarations: [OfferFormComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfferFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
