import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Order} from "../../../shared/model/Order";

@Component({
    selector: 'steak-total-sum-card',
    templateUrl: './total-sum-card.component.html',
    styleUrls: ['./total-sum-card.component.scss']
})
export class TotalSumCardComponent implements OnChanges {

    @Input()
    orders: Order[];

    total: number = 0;

    constructor() {
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            let newVals = changes['orders'].currentValue;
            this.total = this.recalculate(newVals);
            this.orders = newVals;
        }
    }

    recalculate(orders: Order[]): number {
        return orders.reduce((prev, curr) => {
            return prev + curr.amount
        }, 0)
    }
}
