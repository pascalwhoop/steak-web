import * as _ from "underscore";
import {Component, OnInit} from "@angular/core";
import {Offer} from "../../shared/api/model/Offer";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {PageTitleService} from "../../shared/services/page-title.service";
import {UsersApi} from "../../shared/api/endpoints/UsersApi";
import {OfferOrdersPair} from "../../shared/api/model/OfferOrdersPair";

@Component({
    selector: 'steak-offers-page',
    templateUrl: './offers-page.component.html',
    styleUrls: ['offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {

    offers: Array<Array<OfferOrdersPair>>;

    constructor(public title: PageTitleService, public usersApi: UsersApi) {
    }

    ngOnInit() {
        this.title.title = "Offers";

        this.usersApi.offersOrdersGET('pbr', 'pbr', new Date())
            .map(res => {
                res.map((el: OfferOrdersPair) => {
                    el.offer.date = new Date(el.offer.date);
                    return el;
                });
                return res;
            })
            .subscribe(res => {
                this.offers = this.groupOffers(res);
            })
    }


    groupOffers(pairings: OfferOrdersPair[]): Array<Array<OfferOrdersPair>> {
        let days: Map<string, Array<Offer>> = new Map();
        for (let p of pairings) {
            let k = p.offer.date.toDateString();
            !days[k] ? days[k] = [] : null;
            days[k].push(p);
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
