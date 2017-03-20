import {Component, OnInit, Input} from "@angular/core";
import {Offer} from "../../shared/api/model/Offer";
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";
import {OfferOrdersPair} from "../../shared/api/model/OfferOrdersPair";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";

@Component({
    selector: 'steak-offer-item',
    templateUrl: './offer-item.component.html',
    styleUrls: ['offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

    @Input('oo-pair')
    ooPair: OfferOrdersPair;

    constructor(public orderApi: OrdersApi, public offersApi: OffersApi) {
    }

    ngOnInit() {
    }


    addOrder(offer: Offer) {
        this.orderApi.orderPost(offer._id, false).subscribe(order => {
            this.ooPair.orders.push(order);
        });
    }

    removeOrder(ooPair: OfferOrdersPair) {
        //we go a reverse aproach. delete first and add again in case of error.
        //This way, we avoid having to handle quick clicks of remove that would
        //otherwise result in several delete orders for the same element.
        let orderToRemove = ooPair.orders.shift();
        if (!orderToRemove) return;
        this.orderApi.orderDelete(orderToRemove._id)
            .subscribe(null, error => {
                ooPair.orders.push(orderToRemove);
            })
    }

}
