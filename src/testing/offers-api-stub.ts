import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Offer} from '../app/shared/model/Offer';
import {MOCK_OFFERS} from './mock-data';

@Injectable()
export class OffersApiStub {

    constructor(){

    }

    public offerDelete(username: string, offerid: string): Observable<{}> {
        return new Observable((observer) => {
            observer.next({});
            observer.complete();
        });
    }

    public offersGet(date?: Date, startdate?: Date, enddate?: Date): Observable<Offer[]> {
        return new Observable((observer) => {
            observer.next(MOCK_OFFERS);
            observer.complete();
        });
    }

    public offerGetOne(username: string, offerid: string): Observable<Offer> {
        return new Observable((observer) => {
            observer.next(MOCK_OFFERS[0]);
            observer.complete();
        });
    }

    public offerPUT(offerData: Offer): Observable<Offer> {
        return new Observable((observer) => {
            observer.next(offerData);
            observer.complete();
        });
    }

    public offerPost(offer: Offer): Observable<Offer> {
        return new Observable((observer) => {
            observer.next(offer);
            observer.complete();
        });
    }

}
