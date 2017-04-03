import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Offer} from "../../shared/model/Offer";
import {EditMode} from "../../core/util/util.service";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {MdDialog, MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'steak-admin-day-offers-card',
    templateUrl: './admin-day-offers-card.component.html',
    styleUrls: ['./admin-day-offers-card.component.scss']
})
export class AdminDayOffersCardComponent implements OnInit {

    @Input()
    date: Date;
    @Input()
    offers: Offer[];

    @Output('offerChange')
    offerEventEmitter: EventEmitter<Offer> = new EventEmitter();
    @Output('offerDelete')
    offerDeleteEmitter: EventEmitter<Offer> = new EventEmitter();

    constructor(public dialog: MdDialog, public iconRegistry: MdIconRegistry, public sanitizer: DomSanitizer) {
        this.iconRegistry.addSvgIcon('breakfast', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/breakfast.svg'));
        this.iconRegistry.addSvgIcon('soup', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/soup.svg'));
        this.iconRegistry.addSvgIcon('vegetarian', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salad.svg'));
        this.iconRegistry.addSvgIcon('meat', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/steak.svg'));
    }

    ngOnInit() {
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


    /**
     * method that gets called when a child has been changed and it needs to be changed in the array
     * just bubbling it up the food chain though
     * @param offer
     */
    onOfferChange(offer: Offer) {
        this.offerEventEmitter.emit(offer);
    }

    /**
     * method to call when a child has been deleted and we need to remove it from the array of offers
     * just bubbling it up the food chain though
     * @param offer
     */
    onOfferDelete(offer: Offer) {
        this.offerDeleteEmitter.emit(offer);
    }

}
