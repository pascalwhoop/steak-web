import {Component, Input, OnInit} from '@angular/core';
import {OfferOrdersPair} from '../app/shared/model/OfferOrdersPair';

@Component({
    template: '',
})
export class OfferItemStubComponent implements OnInit {
    constructor() { }

    @Input('oo-pair')
    ooPair: OfferOrdersPair;

    ngOnInit() { }

}