import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Offer} from "../app/shared/api/model/Offer";
import {MOCK_OFFERS} from "./mock-data";


@Injectable()
export class OffersApiStub {

    constructor(){

    }

    public offerDelete(username: string, offerid: string): Observable<{}> {
        return new Observable(observer => {
            observer.next({});
        })
    }


    public offersGet(date?: Date, startdate?: Date, enddate?: Date): Observable<Array<Offer>> {
        return new Observable(observer => {
            observer.next(MOCK_OFFERS);
        })
    }


    public offerGetOne(username: string, offerid: string): Observable<Offer> {
        return new Observable(observer => {
            observer.next(MOCK_OFFERS[0]);
        })
    }


    public offerPUT(offerData: Offer): Observable<Offer> {
        return new Observable(observer => {
            observer.next(offerData);
        })
    }


    public offerPost(offer: Offer): Observable<Offer> {
        return new Observable(observer => {
            observer.next(offer);
        })
    }


}
