import * as _ from "underscore";
import {Component, OnInit} from "@angular/core";
import {Offer} from "../../shared/api/model/Offer";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {PageTitleService} from "../../shared/services/page-title.service";

@Component({
    selector: 'steak-offers-page',
    templateUrl: './offers-page.component.html',
    styleUrls: ['offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {

    offers: Array<Array<Offer>>;

    constructor(public title: PageTitleService, public offersApi: OffersApi) {
    }

    ngOnInit() {
        this.title.title = "Offers";

        this.offersApi.offerGet('pbr', null, new Date())
            .map(res => {
                res.map((el) => {
                    el.date = new Date(el.date);
                    return el;
                });
                return res;
            })
            .subscribe(res => {
                this.offers = this.groupOffers(res);
            })
    }


    groupOffers(offers: Offer[]): Array<Array<Offer>> {
        let days: Map<string, Array<Offer>> = new Map();
        for (let o of offers) {
            let k = o.date.toDateString();
            !days[k] ? days[k] = [] : null;
            days[k].push(o);
        }
        return _.values(days);
    }

    makeDaySubtitle(offer: Offer): string{
        let d = offer.date;
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let _day = day < 10 ? "0"+day: "" + day;
        let _month = month < 10 ? "0"+month : "" + month;
        return  _day + '.' + _month
    }

    makeDayTitle(offer: Offer): string{
        let weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        return weekday[offer.date.getDay()];
    }
}
