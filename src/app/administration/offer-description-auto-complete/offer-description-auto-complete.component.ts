import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {Offer} from "../../shared/model/Offer";
import {OfferCacheService} from "../../cache/offer-cache.service";

@Component({
    selector: 'steak-offer-description-auto-complete',
    templateUrl: './offer-description-auto-complete.component.html',
    styleUrls: ['./offer-description-auto-complete.component.scss']
})
export class OfferDescriptionAutoCompleteComponent implements OnInit {

    _filteredOffers: Offer[];

    @Input()
    offer: Offer | string;

    @Output()
    onDescription: EventEmitter<string> = new EventEmitter();
    @Output()
    onOffer: EventEmitter<Offer> = new EventEmitter();

    constructor(public offerCache: OfferCacheService) {
        
    }

    ngOnInit() {
    }

    getOfferDescription(offer: Offer) {
        if (offer) return offer.description;
    }

    filterOffers(filter: KeyboardEvent) {
        let val = filter.srcElement['value'];
        if (val.length < 3) return;
        this._filteredOffers = this.offerCache.find(val);
    }

    onDescriptionChange(change) {
        if (change._id) {
            change = <Offer> change;
            this.onOffer.emit(change);
        } else {
            this.onDescription.emit(change);
        }
    }

}
