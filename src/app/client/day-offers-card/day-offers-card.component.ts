import {Component, OnInit, Input} from "@angular/core";
import {IDayPack} from "../offers-page/offers-page.component";
import {Offer} from "../../shared/model/Offer";
import {makeDayTitle, makeDaySubtitle} from "../../core/util/util.service";

@Component({
    selector: 'steak-day-offers-card',
    templateUrl: './day-offers-card.component.html',
    styleUrls: ['./day-offers-card.component.scss']
})
export class DayOffersCardComponent implements OnInit {

    @Input()
    day: IDayPack;

    constructor() {
    }

    ngOnInit() {
    }

    makeDaySubtitle(date: Date): string {
        return makeDaySubtitle(date)
    }

    makeDayTitle(date: Date): string {
        return makeDayTitle(date)
    }

    dayHasOrders(day: IDayPack) {
        if(!day)return false;
        for (let pair of day.offerOrderPairs) {
            if (pair.orders.length > 0) return true;
        }
    }
}
