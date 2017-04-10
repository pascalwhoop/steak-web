import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Offer} from "../../shared/model/Offer";
import {EditMode, STANDARD_DESCRIPTIONS, STANDARD_TIMES} from "../../core/util/util.service";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {MdDialog, MdDialogRef} from "@angular/material";

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

    constructor(public dialog: MdDialog) {

    }

    ngOnInit() {
    }


    /**
     * create a new offer and add it to the list when it has been created
     * @param date
     */
    createNewFor(date: Date) : MdDialogRef<OfferFormDialogComponent>{
        let ref = this.dialog.open(OfferFormDialogComponent, {data: {date: date, editMode: EditMode.CREATE}});

        ref.afterClosed().subscribe(offer => {
            if (offer) this.onOfferChange(offer);
        });
        return ref;
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

    /**
     * Checks if a day has all the necessary offers to make it 'complete'
     * A day should have
     *  - breakfast
     *  - lunch
     *      - 1x main vegetarian meal
     *      - 1x main veggie or non veggie meal
     *  - salad offers (large, small)
     *  - soup offer
     * @param offers
     */
    dayIsComplete(offers: Offer[]): boolean {
        if (!offers || offers.length == 0) return false;

        return (this.containBreakfast(offers) &&
        this.containVegetarianLunch(offers) &&
        this.containSoup(offers) &&
        this.containSalad(offers) &&
        this.containTwoMainMeals(offers))

    }

    containBreakfast(offers: Offer[]): boolean {
        let cereal = false;
        let bWithCer = false;
        let bWithoutCer = false;

        //if offers contain all three core breakfast elements, breakfast is completed
        for (let off of offers) {
            if (off.time == STANDARD_TIMES.BREAKFAST) {
                if (off.description == STANDARD_DESCRIPTIONS.BREAKFAST_WITHOUT_CEREAL) bWithoutCer = true;
                if (off.description == STANDARD_DESCRIPTIONS.BREAKFAST_WITH_CEREAL) bWithCer = true;
                if (off.description == STANDARD_DESCRIPTIONS.CEREAL) cereal = true;
            }
        }
        return cereal && bWithCer && bWithoutCer;
    }

    containSoup(offers: Offer[]): boolean {
        //if one of the offers is soup, it contains soup
        for (let off of offers) {
            if (off.description.toLowerCase().indexOf(STANDARD_DESCRIPTIONS.SOUP) >= 0 && !off.main_offer) return true;
        }
        return false;
    }

    private containSalad(offers: Offer[]): boolean {
        let smallSalad = false;
        let largeSalad = false;

        //if offers contain all three core breakfast elements, breakfast is completed
        for (let off of offers) {
            if (off.time == STANDARD_TIMES.LUNCH) {
                if (off.description == STANDARD_DESCRIPTIONS.LARGE_SALAD) smallSalad = true;
                if (off.description == STANDARD_DESCRIPTIONS.SMALL_SALAD) largeSalad = true;
            }
        }
        return smallSalad && largeSalad;
    }

    private containVegetarianLunch(offers: Offer[]): boolean {
        //if one of the offers is veggi and main offer
        for (let off of offers) {
            if (off.vegetarian && off.main_offer) return true;
        }
        return false;
    }

    private containTwoMainMeals(offers: Offer[]) {
        let mainOfferCount = 0;
        offers.forEach(offer => {
            if (offer.main_offer) mainOfferCount++
        });
        return mainOfferCount >= 2;
    }
}
