import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {Offer} from "../../shared/model/Offer";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {toApiDate} from "../../core/util/util.service";
import {Observable} from "rxjs";
import {OfferCacheService} from "../../cache/offer-cache.service";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
    selector: 'steak-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

    dates: Date[];
    offers: Offer[];

    constructor(public title: PageTitleService, public offerApi: OffersApi, public offerCache: OfferCacheService) {
        this.dates = this.generateNextDays();
    }

    ngOnInit() {

        this.title.title = "Administration";
        this.offers = this.offerCache.offers;
        this.fetchOffers()
            .subscribe(offers => this.offerCache.putMany(offers));
        this.ensureOffersCached()
    }

    /**
     * Generates the next 21 days to add offers to. You can only create an offer for dates that are in the future.
     * @returns {Array}
     */
    generateNextDays(): Date[] {
        let dates = [];
        let now = new Date().getTime();
        let millisPerDay = 1000 * 3600 * 24;

        for (let i = 0; i < 21; i++) {
            let offset = i * millisPerDay;
            let next = new Date(now + offset);
            if (next.getDay() == 0 || next.getDay() == 6) {
                continue;
            }
            dates.push(next);
        }

        return dates;
    }

    filterOffersForDate(offers: Offer[], date: Date): Offer[] {
        if (!offers)return null;
        return offers.filter(offer => toApiDate(offer.date) == toApiDate(date));
    }


    private fetchOffers(): Observable<Array<Offer>> {
        let obs = this.offerApi.offersGet(null, new Date());
        obs.subscribe(offers => this.offers = offers);
        return obs;
    }

    ensureOffersCached() {
        if (this.offerCache.offers.length == 0) {
            this.fetchAllOffersAndCache();
        }
    }

    private fetchAllOffersAndCache(): void {
        this.offerApi.offersGet().subscribe(offers => this.offerCache.putMany(offers));
    }

    /**
     * method that gets called when a child has been changed and it needs to be changed in the array
     * @param offer
     */
    onOfferChange(offer: Offer) {
        let changedIndex = this.offers.findIndex(_offer => _offer._id == offer._id);
        if (changedIndex > -1) {
            this.offers[changedIndex] = offer;
        }else{
            this.offers.push(offer);
        }
    }

    /**
     * method to call when a child has been deleted and we need to remove it from the array of offers
     * @param offer
     */
    onOfferDelete(offer: Offer) {
        this.offers = this.offers.filter(_offer => _offer._id != offer._id);
    }
}
