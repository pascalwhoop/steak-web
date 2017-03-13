import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../shared/services/page-title.service";
import {Offer} from "../../shared/api/model/Offer";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";

@Component({
    selector: 'steak-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

    dates: Date[];
    offers: Offer[];
    editingForDate: Date;

    constructor(public title: PageTitleService, public offerApi: OffersApi) {
        this.dates = this.generateNextDays();
        this.fetchOffers();
    }

    ngOnInit() {
        this.title.title = "Administration";
    }

    generateNextDays(): Date[] {
        let dates = [];
        let now = new Date().getTime();
        let millisPerDay = 1000 * 3600 * 24;

        for (let i = 0; i < 20; i++) {
            let offset = i * millisPerDay;
            dates.push(new Date(now + offset));
        }
        return dates;
    }

    createNewFor(date: Date){
        this.editingForDate = date;
    }


    private fetchOffers() {
        this.offerApi.offerGet()
            .subscribe(offers => this.offers = offers);
    }
}
