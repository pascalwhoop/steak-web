import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";

import {TotalSumCardComponent} from "./total-sum-card.component";
import {NO_ERRORS_SCHEMA, SimpleChange} from "@angular/core";
import {CovalentCoreModule} from "@covalent/core";
import {MOCK_ORDERS} from "../../../../testing/mock-data";
import {itemFrom} from "../../../../testing/testing-utility-functions";
import {Order} from "../../../shared/model/Order";

describe('TotalSumCardComponent', () => {
    let component: TotalSumCardComponent;
    let fixture: ComponentFixture<TotalSumCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CovalentCoreModule],
            declarations: [TotalSumCardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TotalSumCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should sum up the costs over all orders', fakeAsync(() => {
        component.orders = MOCK_ORDERS.concat(MOCK_ORDERS, MOCK_ORDERS); //12.25 * 3 = 36.75
        component.ngOnChanges({orders: {currentValue: component.orders} as SimpleChange});
        fixture.detectChanges();
        tick();

        let sumText = itemFrom(fixture, '.md-headline').nativeElement.innerHTML;
        expect(sumText).toBe('36.75 €')
    }));

    fit('should calculate the chart data from the Order Input', () => {
        let mockOrders = getMockOrdersForChartTest();
        expect(component.recalcChartData(mockOrders)).toBe(expectedChartData);
    });
});

let expectedChartData = [
    {name: 'soup', series: []},
    {name: 'salad', series: []},
    {name: 'breakfast', series: []},
    {
        name: 'vegetarian',
        series: [
            {
                value: 5,
                name: '2017-02-21T00:00:00.000Z'
            },
            {
                value: 10,
                name: '2018-02-21T00:00:00.000Z'
            }
        ]
    },
    {
        name: 'meat',
        series: [
            {
                value: 7.25,
                name: '2017-02-22T00:00:00.000Z'
            },
            {
                value: 14.50,
                name: '2018-02-22T00:00:00.000Z'
            }
        ]
    }
];

function getMockOrdersForChartTest(): Order[] {
    let chartInputOrders = MOCK_ORDERS.concat(MOCK_ORDERS);
    chartInputOrders[2].amount *= 2;
    chartInputOrders[2].offer.date = new Date('2018-02-22T00:00:00.000Z');
    chartInputOrders[3].amount *= 2;
    chartInputOrders[3].offer.date = new Date('2018-02-22T00:00:00.000Z');
    return chartInputOrders;
}
