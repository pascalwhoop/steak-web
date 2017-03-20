import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {Offer} from "../../shared/api/model/Offer";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {toApiDate, EditMode} from "../../core/util/util.service";
import {MdDialog} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";


@Component({
    selector: 'steak-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

    dates: Date[];
    offers: Offer[];

    constructor(public title: PageTitleService, public offerApi: OffersApi, public dialog: MdDialog) {
        this.dates = this.generateNextDays();
    }

    ngOnInit() {
        this.fetchOffers();
        this.title.title = "Administration";
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
            dates.push(new Date(now + offset));
        }
        return dates;
    }

    /**
     * create a new offer and add it to the list when it has been created
     * @param date
     */
    createNewFor(date: Date) {
        let ref = this.dialog.open(OfferFormDialogComponent);
        ref.componentInstance.date = date;

        let instance = ref.componentInstance;
        instance.editMode = EditMode.CREATE;

        instance.offerEventEmitter.subscribe(next => {
            ref.close();
            if (next) this.offers.push(next);
        });
    }

    filterOffersForDate(offers: Offer[], date: Date): Offer[] {
        if (!offers)return null;
        return offers.filter(offer => toApiDate(offer.date) == toApiDate(date));
    }

    /**
     * method that gets called when a child has been changed and it needs to be changed in the array
     * @param offer
     */
    onOfferChange(offer: Offer) {
        let changedIndex = this.offers.findIndex(_offer => _offer._id == offer._id);
        if (changedIndex > -1) {
            this.offers[changedIndex] = offer;
        }
    }

    /**
     * method to call when a child has been deleted and we need to remove it from the array of offers
     * @param offer
     */
    onOfferDelete(offer: Offer) {
        this.offers = this.offers.filter(_offer => _offer._id != offer._id);
    }


    private fetchOffers() {
        this.offerApi.offersGet(null, new Date())
            .subscribe(offers => this.offers = offers);
    }
}
