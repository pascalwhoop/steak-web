import {Component, OnInit, Input} from '@angular/core';
import {OfferOrdersPair} from "../app/shared/api/model/OfferOrdersPair";

@Component({
    moduleId: module._id,
    selector: 'steak-offer-item',
    template: ''
})
export class OfferItemStubComponent implements OnInit {
    constructor() { }

    @Input('oo-pair')
    ooPair: OfferOrdersPair;

    ngOnInit() { }

}