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



  addOrder(offer: Offer) {
    this.orderApi.orderPUT(offer._id, false).subscribe(order =>{
      this.ooPair.orders.push(order);
    });
    console.log('order placed!');

  }

  removeOrder(offer: Offer){

  }

}
