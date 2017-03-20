import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {Offer} from "../../shared/api/model/Offer";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {makeDayTitle, makeDaySubtitle, toApiDate} from "../../core/util/util.service";
import {MdDialog, MdDialogRef} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";


@Component({
    selector: 'steak-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

    dates: Date[];
    offers: Offer[];
    editingForDate: Date;

    constructor(public title: PageTitleService, public dialog: MdDialog, public offerApi: OffersApi) {
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

    createNewFor(date: Date) {
        this.dialog.open(OfferFormDialogComponent, {data: {date: date}});
        this.editingForDate = date;
    }

    filterOffersForDate(offers: Offer[], date: Date): Offer[] {
        if (!offers)return null;
        return offers.filter(offer => toApiDate(offer.date) == toApiDate(date));
    }

    makeDaySubtitle(date: Date): string {
        return makeDaySubtitle(date)
    }

    makeDayTitle(date: Date): string {
        return makeDayTitle(date)
    }


    private fetchOffers() {
        this.offerApi.offersGet(null, new Date())
            .subscribe(offers => this.offers = offers);
    }
}
