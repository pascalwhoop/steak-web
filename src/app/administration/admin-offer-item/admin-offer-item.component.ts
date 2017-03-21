import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Offer} from "../../shared/model/Offer";
import {MdDialog} from "@angular/material";
import {OfferFormDialogComponent} from "../offer-form-dialog/offer-form-dialog.component";
import {EditMode} from "../../core/util/util.service";
import * as _ from 'lodash';

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

  constructor( public dialog: MdDialog) { }

  ngOnInit() {
  }

  edit(offer: Offer) {
    let ref = this.dialog.open(OfferFormDialogComponent);
    //TODO pass as data, since injector of DialogRef doesn't work for some reason
    let instance = ref.componentInstance;
    let editOffer = _.cloneDeep(offer);
    instance.date = editOffer.date;
    instance.offer = editOffer;
    instance.editMode = EditMode.UPDATE;

    instance.offerEventEmitter.subscribe(next =>{
      ref.close();
      if(!next)this.offerDeleteEmitter.emit(this.offer);
      else this.offerEventEmitter.emit(next);
    });

  }

}
