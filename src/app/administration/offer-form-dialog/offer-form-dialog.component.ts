import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {Offer} from "../../shared/api/model/Offer";
import {EditMode} from "../../core/util/util.service";
import {MdSnackBar} from "@angular/material";

@Component({
    selector: 'steak-offer-form-dialog',
    templateUrl: 'offer-form-dialog.component.html',
    styleUrls: ['offer-form-dialog.component.scss']
})
export class OfferFormDialogComponent implements OnInit {

    @Input()
    date: Date;


    offerEventEmitter: EventEmitter<Offer> = new EventEmitter();

    editMode: EditMode = EditMode.CREATE;

    offer: Offer = new OfferObj();

    constructor(public offersApi: OffersApi, public snackBar: MdSnackBar) {
    }

    ngOnInit() {
    }

    createOffer(offer: Offer) {
        offer.date = this.date;

        this.offersApi.offerPost(this.offer)
            .subscribe(offer => {
                this.snackBar.open('Create successful', null, {duration: 1500});
                this.offerEventEmitter.emit(offer);
            })
    }

    updateOffer(offer: Offer){
        this.offersApi.offerPut(offer).subscribe(
            offer =>{
                this.snackBar.open('Update successful', null, {duration: 1500});
                this.offerEventEmitter.emit(offer);
            },
            error =>{
                this.snackBar.open('Update not successful', null, {duration: 1500});
            }
        )
    }

    deleteOffer(offer: Offer) {
        this.offersApi.offerDelete(offer._id)
            .subscribe(next => {
                this.snackBar.open('Delete successful', null, {duration: 1500});
                this.offerEventEmitter.emit(null);

            })
    }

    canBeCreate(): boolean {
        return (this.editMode == EditMode.CREATE);
    }

    canBeUpdate(): boolean {
        return (this.editMode == EditMode.UPDATE);
    }

    canBeDelete(): boolean {
        return (this.editMode == EditMode.UPDATE);
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

