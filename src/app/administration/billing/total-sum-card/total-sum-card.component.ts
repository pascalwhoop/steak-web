import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Order} from "../../../shared/model/Order";

@Component({
    selector: 'steak-total-sum-card',
    templateUrl: './total-sum-card.component.html',
    styleUrls: ['./total-sum-card.component.scss']
})
export class TotalSumCardComponent implements OnChanges{

    @Input()
    orders: Order[];

    total: number = 0;

    constructor() {
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            this.recalculate()
        }
    }

    private recalculate() {

    }
}
