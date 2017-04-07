import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";

import {TopThreeMealsCardComponent} from "./top-three-meals-card.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MOCK_ORDERS} from "../../../../testing/mock-data";
import {itemsFrom} from "../../../../testing/testing-utility-functions";
import {By} from "@angular/platform-browser";

describe('TopThreeMealsCardComponent', () => {
    let component: TopThreeMealsCardComponent;
    let fixture: ComponentFixture<TopThreeMealsCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopThreeMealsCardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopThreeMealsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should list the top three offers as a list with count', fakeAsync(() => {
        //makes 2x 5 orders for each offer
        component.orders = MOCK_ORDERS.concat(MOCK_ORDERS,MOCK_ORDERS,MOCK_ORDERS,MOCK_ORDERS);
        component.topOrders = component.recalculate(component.orders);
        fixture.detectChanges();
        tick();
        
        let items = itemsFrom(fixture, 'md-list-item');
        expect(items.length).toBe(2);
        expect(items[0].query(By.css('p[md-line]')).nativeElement.innerHTML).toBe('5 orders');
    }));
});
