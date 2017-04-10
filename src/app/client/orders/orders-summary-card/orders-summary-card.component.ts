import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Order} from '../../../shared/model/Order';
import {roundToTwoAfterDecimal} from '../../../core/util/util.service';

@Component({
    selector: 'steak-orders-summary-card',
    templateUrl: './orders-summary-card.component.html',
    styleUrls: ['./orders-summary-card.component.scss'],
})
export class OrdersSummaryCardComponent implements OnInit, OnChanges {

    @Input()
    orders: Order[];

    openSum: number = 0;
    vegetarianScore: number = 0;
    expectedBill: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        let newOrders = changes['orders'].currentValue;
        if (!newOrders) return;
        this.openSum = this.calcOpenSum(newOrders);
        this.vegetarianScore = this.calcVegetarianScore(newOrders);
        this.expectedBill = this.calcExpectedBill(newOrders);
    }

    public calcExpectedBill(orders: Order[]): number {

        let sum = this.calcOpenSum(orders);
        return roundToTwoAfterDecimal(sum / this.getPercentageOfMonthComplete());
    }

    public calcVegetarianScore(orders: Order[]): number {
        let vegCount = orders.map((o) => <number> (o.offer.vegetarian ? 1 : 0)).reduce((prev, curr) => prev + curr);
        return Math.round(vegCount / orders.length * 100);
    }

    public calcOpenSum(orders: Order[]): number {
        let sum = orders.map((o) => o.amount).reduce((prev, curr) => prev + curr);
        return roundToTwoAfterDecimal(sum);
    }

    /**
     * Returns a percentage of the total amount of days of this month.
     * So if its the 15th and the month has 30 days it gives back 0.5.
     * This means that the current price is about 50% of the total expected costs this month.
     * This ignores weekends etc but its a good estimate
     */
    public getPercentageOfMonthComplete(): number {
        let d = new Date();
        let dateNow = d.getDate();
        let totalInMonth = this.daysInMonth(d.getMonth(), d.getFullYear());
        return dateNow / totalInMonth;
    }

    /**
     * Clever method taken from https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript to return number of days in month
     * @param month
     * @param year
     * @returns {number}
     */
    public daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

}
