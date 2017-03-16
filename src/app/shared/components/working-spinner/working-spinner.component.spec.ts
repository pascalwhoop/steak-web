import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {WorkingSpinnerComponent} from "./working-spinner.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {VFeedbackService} from "../../services/vfeedback.service";

describe('WorkingSpinnerComponent', () => {
    let component: WorkingSpinnerComponent;
    let fixture: ComponentFixture<WorkingSpinnerComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkingSpinnerComponent],
            providers: [{
                provide: VFeedbackService,
                useValue: jasmine.createSpyObj('vfeedbackService', ['addListener', 'removeListener'])
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
