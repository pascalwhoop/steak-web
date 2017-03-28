import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {OrdersSummaryCardComponent} from "./orders-summary-card.component";
import {NO_ERRORS_SCHEMA, ViewChild, Component, SimpleChanges} from "@angular/core";
import {MOCK_ORDERS} from "../../../../testing/mock-data";
import {Order} from "../../../shared/model/Order";

fdescribe('OrdersSummaryCardComponent', () => {
    let component: OrdersSummaryCardComponent;
    let fixture: ComponentFixture<OrdersSummaryCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [OrdersSummaryCardComponent,TestParentComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersSummaryCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should trigger ngOnChanges on change of Input()', fakeAsync(() => {
        //creating fake parent component
        let fixture = TestBed.createComponent(TestParentComponent);
        let testParentComponent = fixture.componentInstance;
        fixture.detectChanges();
        tick();
        expect(testParentComponent.summaryCardChild).toBeTruthy();
        //setting the orders to what we want to Input into our component
        spyOn(testParentComponent.summaryCardChild, 'ngOnChanges').and.callThrough();
        testParentComponent.orders = MOCK_ORDERS;
        fixture.detectChanges();
        expect(testParentComponent.summaryCardChild.ngOnChanges).toHaveBeenCalled();
    }));


    it('should calc sum of orders properly', () => {
        expect(component.openSum).toBe(0);
        callOnChangesWithMockOrders(component);
        expect(component.openSum).toBe(12.25);
    });

    it('should calc vegetarian stats properly', () => {
        expect(component.vegetarianScore).toBe(0);
        callOnChangesWithMockOrders(component);
        expect(component.vegetarianScore).toBe(50);
    });

    it('should calc the expected end of month costs properly', () => {
        spyOn(component, 'getPercentageOfMonthComplete').and.returnValue(0.743);
        callOnChangesWithMockOrders(component);
        expect(component.expectedBill).toBe(16.49);
    });

});


let callOnChangesWithMockOrders = function (component) {
    component.ngOnChanges({orders: {currentValue: MOCK_ORDERS, previousValue: null, isFirstChange: () => true}});
};

//to test the @Input() on our component we need to do some tricking

/* In the host component's template we will pass the inputs to the actual
 * component to test, that is TestComponent in this case
 */
@Component({
    selector: `test-host-component`,
    template: `<div><steak-orders-summary-card [orders]="orders"></steak-orders-summary-card></div>`
})
export class TestParentComponent {
    @ViewChild(OrdersSummaryCardComponent) /* using viewChild we get access to the OrdersSummaryCardComponent which is a child of TestHostComponent */
    public summaryCardChild: OrdersSummaryCardComponent;
    public orders: Order[];
    /* this is the variable which is passed as input to the OrdersSummaryCardComponent */
}