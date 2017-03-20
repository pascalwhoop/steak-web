import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {WorkingSpinnerComponent} from "./working-spinner.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AjaxVisualFeedbackService} from "../../../ajax-visual-feedback/ajax-visual-feedback.service";


describe('WorkingSpinnerComponent', () => {
    let component: WorkingSpinnerComponent;
    let fixture: ComponentFixture<WorkingSpinnerComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkingSpinnerComponent],
            providers: [{
                provide: AjaxVisualFeedbackService,
                useValue: jasmine.createSpyObj('vfeedbackService', ['subscribe'])
            }],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkingSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
