import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'steak-offer-item',
    template: ''
})
export class OfferItemStubComponent implements OnInit {
    constructor() { }

    @Input('offer')
    offer;

    ngOnInit() { }

}