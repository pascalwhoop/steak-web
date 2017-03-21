import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {Offer} from "../../shared/model/Offer";
import {EditMode} from "../../core/util/util.service";
import {AjaxVisualFeedbackService} from "../../ajax-visual-feedback/ajax-visual-feedback.service";
import {FormControl, Validators, Form} from "@angular/forms";
import {OfferCacheService} from "../../cache/offer-cache.service";

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
    offerForm: FormControl;


    constructor(public offersApi: OffersApi, public vFeedback: AjaxVisualFeedbackService, public offerCache: OfferCacheService) {
        this.offer.heat = 20; //default to 20 degrees
        this.offer.description = '';
    }

    ngOnInit() {
    }

    applyOldOfferAsTemplate(offer: Offer){
        delete offer._id;
        offer.date = this.date;
        this.offer = offer;
    }

    createOffer(offer: Offer) {
        offer.date = this.date;

        let obs = this.offersApi.offerPost(this.offer);
        obs.subscribe(offer => {
            this.offerEventEmitter.emit(offer);
        });
        this.vFeedback.showMessageOnAnswer('Create successful', 'Create failed', obs);
    }

    updateOffer(offer: Offer) {
        let obs = this.offersApi.offerPut(offer);
        obs.subscribe(
            offer => {

                this.offerEventEmitter.emit(offer);
            }
        );
        this.vFeedback.showMessageOnAnswer('Update successful', 'Update failed', obs);
    }

    deleteOffer(offer: Offer) {
        let obs = this.offersApi.offerDelete(offer._id);
        obs.subscribe(next => this.offerEventEmitter.emit(null));
        this.vFeedback.showMessageOnAnswer('Delete successful', 'Delete failed', obs);
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

