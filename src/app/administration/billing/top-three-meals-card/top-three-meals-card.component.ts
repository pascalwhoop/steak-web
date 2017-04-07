import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Order} from "../../../shared/model/Order";
import * as _ from "lodash";


@Component({
    selector: 'steak-top-three-meals-card',
    templateUrl: './top-three-meals-card.component.html',
    styleUrls: ['./top-three-meals-card.component.scss']
})
export class TopThreeMealsCardComponent implements OnChanges {

    @Input()
    orders: Order[];

    topOrders: ITopOffer[];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            let newVals = changes['orders'].currentValue;
            this.topOrders = this.recalculate(newVals);
            this.orders = newVals;
        }
    }


    private recalculate(orders: Order[]) {
        let offerCountMap: ITopOfferMap = orders.map(order => {
            return {
                _id: order.offer._id,
                description: order.offer.description
            }
        })
            .reduce((prev, curr, index, arr): ITopOfferMap => {
                if (prev[curr._id]) {
                    prev[curr._id].count++;
                    return prev;
                } else {
                    prev[curr._id] = {description: curr.description, count: 1, _id: curr._id};
                    return prev;
                }
            }, {});
        //sort descending
        return _.values(offerCountMap).sort((a,b) => b.count - a.count).slice(0,3);
    }
}

interface ITopOfferMap {
    [propName: string]: ITopOffer;
}

interface ITopOffer {
    description: string;
    _id: string;
    count: number;
}

