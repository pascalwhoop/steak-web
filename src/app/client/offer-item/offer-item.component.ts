import {Component, OnInit, Input} from '@angular/core';
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

  constructor(public orderApi: OrdersApi, public offersApi: OffersApi) { }

  ngOnInit() {
  }

  /**
   * Returns the number of orders that have been placed for this offer by the user. 
   * @param offer
   * @returns {number}
   */
  orderCount(offer: Offer) : number{
    return 3;
  }


  addOrder(offer: Offer) {

  }

  removeOrder(offer: Offer){

  }

}
