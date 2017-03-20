import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {Offer} from "../../shared/api/model/Offer";
import {MdDialogRef} from "@angular/material";

@Component({
    selector: 'steak-offer-form-dialog',
    templateUrl: 'offer-form-dialog.component.html',
    styleUrls: ['offer-form-dialog.component.scss']
})
export class OfferFormDialogComponent implements OnInit {

    @Input()
    date: Date;

    @Output()
    newOffer: EventEmitter<Offer> = new EventEmitter();

    offer: Offer = new OfferObj();

    constructor(public offersApi: OffersApi, public dialogRef: MdDialogRef<OfferFormDialogComponent>) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.offer.date = this.date;


        this.offersApi.offerPost(this.offer)
            .subscribe(offer => {
                this.newOffer.emit(offer);
            })
    }

}



class OfferObj implements Offer {
    description: string;
    _id: string;
    price: number;
    date: Date;
    time: string;
    main_offer: boolean;
    vegetarian: boolean;
    heat: number;


    constructor(description?: string, id?: string, price?: number, date?: Date, time?: string, main_offer?: boolean, vegetarian?: boolean, heat?: number) {
        this.description = description;
        this._id = id;
        this.price = price;
        this.date = date;
        this.time = time;
        this.main_offer = !!main_offer;
        this.vegetarian = !!vegetarian;
        this.heat = heat;
    }
}