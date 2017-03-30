import {async, ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {OrdersHistoryTableComponent} from "./orders-history-table.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TdDataTableService, CovalentCoreModule} from "@covalent/core";
import {By} from "@angular/platform-browser";
import {MOCK_ORDERS} from "../../../../testing/mock-data";
import {CoreModule} from "../../../core/core.module";

describe('OrdersHistoryTableComponent', () => {
    let component: OrdersHistoryTableComponent;
    let fixture: ComponentFixture<OrdersHistoryTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CovalentCoreModule, CoreModule],
            declarations: [OrdersHistoryTableComponent],
            providers: [TdDataTableService],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersHistoryTableComponent);
        component = fixture.componentInstance;

        component.data = MOCK_ORDERS;
        component.filter();
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show two orders in historical data', fakeAsync(() => {
        let rows = fixture.debugElement.queryAll(By.css('tbody>tr'));
        expect(rows.length).toBe(2);
    }));

    it('should show all 5 headers', () => {
        let headers = fixture.debugElement.queryAll(By.css('th'));
        expect(headers.length).toBe(5);
    });


    it('should let the user order by date', fakeAsync(() => {
        tick();
        let dateHeader = fixture.debugElement.queryAll(By.css('th'))[0].queryAll(By.css('md-icon'))[0];

        let first = "22-02-2017";
        let second = "21-02-2017";
        //expect them to be sorted descending
        expect(getDateForRow(getRows()[0])).toEqual(first);
        expect(getDateForRow(getRows()[1])).toEqual(second);
        //click on date to sort ascending now
        dateHeader.nativeElement.click();

        fixture.detectChanges();

        //expect direction to have flipped
        expect(getDateForRow(getRows()[0])).toEqual(second);
        expect(getDateForRow(getRows()[1])).toEqual(first);
    }));

    it('should show "yes" instead of "true" for boolean values', () => {
        let vegetarianValue = getRows()[0].queryAll(By.css('td>div>span'))[3].nativeElement.innerHTML;
        expect(vegetarianValue).toBe('no');
    });

    it('should let the user filter with the search function', () => {
        component.search('Back');
        fixture.detectChanges();
        expect(getRows().length).toBe(1);
    });

    let getDateForRow = function (row): string {
        return row.queryAll(By.css('td>div>span'))[0].nativeElement.innerHTML
    };

    let getRows = function () {
        return fixture.debugElement.queryAll(By.css('tbody>tr'));
    };
});
