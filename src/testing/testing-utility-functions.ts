import {MOCK_OFFERS} from './mock-data';
import * as _ from 'lodash';
import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {OfferOrdersPair} from '../app/shared/model/OfferOrdersPair';

export function makeFourMockOffersForTomorrow() {
    //create a copy of mock offers
    let mockOffers = _.cloneDeep(MOCK_OFFERS);
    //set all dates to tomorrow
    mockOffers.forEach((offer) => offer.date = new Date(new Date().getTime() + 1000 * 3600 * 24));
    return mockOffers;
}

export function itemsFrom(fixture: ComponentFixture<any>, query: string): DebugElement[] {
    return fixture.debugElement.queryAll(By.css(query));
}

export function itemFrom(fixture: ComponentFixture<any>, query: string): DebugElement {
    return fixture.debugElement.query(By.css(query));
}

export function setDatesForOfferOrdersPairs(pairs: OfferOrdersPair[], dateString: string): OfferOrdersPair[] {
    pairs.forEach((pair) => {
        pair.offer.date = new Date(dateString);
        pair.orders.forEach((order) => order.date = new Date(dateString));
    });
    return pairs;
}