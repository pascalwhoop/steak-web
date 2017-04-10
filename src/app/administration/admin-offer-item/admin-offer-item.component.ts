import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Offer} from "../../shared/model/Offer";
import {MdDialog} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {EditMode, getIconNameForMeal} from "../../core/util/util.service";
import * as _ from "lodash";

@Component({
    selector: 'steak-admin-offer-item',
    templateUrl: './admin-offer-item.component.html',
    styleUrls: ['./admin-offer-item.component.scss']
})
export class AdminOfferItemComponent implements OnInit {

    @Input()
    offer: Offer;

    @Output('offerChange')
    offerEventEmitter: EventEmitter<Offer> = new EventEmitter();
    @Output('offerDelete')
    offerDeleteEmitter: EventEmitter<Offer> = new EventEmitter();

    constructor(public dialog: MdDialog) {
    }

    ngOnInit() {
    }

    edit(offer: Offer) {
        let editOffer = _.cloneDeep(offer);
        let ref = this.dialog.open(OfferFormDialogComponent, {
            data: {
                date: editOffer.date,
                offer: editOffer,
                editMode: EditMode.UPDATE
            }
        });


        ref.afterClosed().subscribe(offer => {
            //if deleted, we pass back just the ID
            if (offer && typeof offer ==='string') {
                this.offerDeleteEmitter.emit(this.offer);
            }
            //else the changed object
            else if (offer) {
                this.offerEventEmitter.emit(offer);
            }
            //if nothing was changed, we pass back nothing
        });
    }

    _getIconForMeal(offer: Offer) {
        return getIconNameForMeal(offer);
    }

}
