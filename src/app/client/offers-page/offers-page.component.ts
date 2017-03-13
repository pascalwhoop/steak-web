import {Component, OnInit} from "@angular/core";
import {Offer} from "../../shared/api/model/Offer";
import {PageTitleService} from "../../shared/services/page-title.service";
import {UsersApi} from "../../shared/api/endpoints/UsersApi";
import {OfferOrdersPair} from "../../shared/api/model/OfferOrdersPair";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";
import {Order} from "../../shared/api/model/Order";
import * as _ from "lodash";

@Component({
    selector: 'steak-offers-page',
    templateUrl: './offers-page.component.html',
    styleUrls: ['offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {

    offerOrderData: IDayPack[];

    constructor(public title: PageTitleService, public usersApi: UsersApi, public offersApi: OffersApi, public ordersApi: OrdersApi) {

    }


    ngOnInit() {
        this.title.title = "Offers";

        this.fetchData()
            .subscribe((pairs) => {
                this.offerOrderData = this.mapPairsToDays(pairs);
            })

    }


    fetchData(): Observable<OfferOrdersPair[]> {
        return new Observable(observer => {
            let offerObs = this.offersApi.offersGet(null, new Date());
            let orderObs = this.ordersApi.ordersGET(new Date());

            Observable.forkJoin(offerObs, orderObs)
                .subscribe(results => {
                    let offers = results[0];
                    let orders = results[1];
                    observer.next(this.makeOfferOrderPairs(offers, orders));
                });
        })
    }

    mapPairsToDays(pairings: OfferOrdersPair[]): IDayPack[] {
        let results: IDayPack[] = [];

        let dateStrings = pairings.map(pair => pair.offer.date.toString());
        dateStrings = _.uniq(dateStrings);

        dateStrings.forEach(dateString => {
            results.push(
                {
                    date: new Date(dateString),
                    offerOrderPairs: pairings.filter(pair => dateString == pair.offer.date.toString())
                });
        });
        return results;
    }

    makeDaySubtitle(offer: Offer): string {
        let d = offer.date;
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let _day = day < 10 ? "0" + day : "" + day;
        let _month = month < 10 ? "0" + month : "" + month;
        return _day + '.' + _month
    }

    makeDayTitle(offer: Offer): string {
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[offer.date.getDay()];
    }

    private makeOfferOrderPairs(offers: Offer[], orders: Order[]): OfferOrdersPair[] {
        return offers.map(offer => {
            return {
                offer: offer,
                orders: orders.filter(o => o.offer._id == offer._id)
            }
        })
    }
}


interface IDayPack {
    date: Date;
    offerOrderPairs: OfferOrdersPair[]
}