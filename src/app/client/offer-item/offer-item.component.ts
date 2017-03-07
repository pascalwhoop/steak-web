import {Component, OnInit, Input} from '@angular/core';
import {Offer} from "../../shared/api/model/Offer";

@Component({
  selector: 'steak-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  @Input()
  offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
