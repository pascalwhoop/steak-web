import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Order} from '../../../shared/model/Order';

@Component({
    selector: 'steak-average-sum-per-employee-card',
    templateUrl: './average-sum-per-employee-card.component.html',
    styleUrls: ['./average-sum-per-employee-card.component.scss'],
})
export class AverageSumPerEmployeeCardComponent implements OnChanges {

    @Input()
    orders: Order[];

    min: number = 0;
    max: number = 0;
    avg: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            this.recalculate();
        }
    }

    private recalculate() {

    }
}
