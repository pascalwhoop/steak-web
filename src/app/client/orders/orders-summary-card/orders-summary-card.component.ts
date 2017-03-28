import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Order} from "../../../shared/model/Order";

@Component({
    selector: 'steak-orders-summary-card',
    templateUrl: './orders-summary-card.component.html',
    styleUrls: ['./orders-summary-card.component.scss']
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

    private calcExpectedBill(orders: Order[]): number {

        let sum = this.calcOpenSum(orders);
        return this.roundToTwoAfterDecimal(sum / this.getPercentageOfMonthComplete());
    }

    private calcVegetarianScore(orders: Order[]): number {
        let vegCount = orders.map(o => o.offer.vegetarian? 1 : 0).reduce((prev, curr) => prev+curr);
        return Math.round(vegCount / orders.length * 100);
    }

    private calcOpenSum(orders: Order[]): number {
        return orders.map(o => o.amount).reduce((prev, curr) => prev + curr);
    }

    /**
     * Returns a percentage of the total amount of days of this month.
     * So if its the 15th and the month has 30 days it gives back 0.5.
     * This means that the current price is about 50% of the total expected costs this month.
     * This ignores weekends etc but its a good estimate
     */
    private getPercentageOfMonthComplete(): number {
        let d = new Date();
        let dateNow = d.getDate();
        let totalInMonth = this.daysInMonth(d.getMonth(), d.getFullYear());
        return dateNow/totalInMonth;
    }

    /**
     * Clever method taken from https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript to return number of days in month
     * @param month
     * @param year
     * @returns {number}
     */
    private daysInMonth(month, year) {
        return new Date(year, month+1, 0).getDate();
    }

    private roundToTwoAfterDecimal(num: number){
        return Math.round(num *100)/100;
    }
}
