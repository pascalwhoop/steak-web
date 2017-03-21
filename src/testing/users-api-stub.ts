import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {MOCK_USERS, MOCK_OFFER_ORDER_PAIR} from "./mock-data";
import {OfferOrdersPair} from "../app/shared/model/OfferOrdersPair";
import {User} from "../app/shared/model/User";

@Injectable()
export class UsersApiStub {


    constructor() {
    }


    public meGET(): Observable <User> {
        return new Observable(observer => {
            observer.next(MOCK_USERS[0]);
        })
    }

    public offersOrdersGET(useridpath: string, datepath: Date): Observable < Array < OfferOrdersPair >> {
        return new Observable(observer => {
            observer.next(MOCK_OFFER_ORDER_PAIR);
        })
    }


    public userGet(useridpath: string): Observable < User > {
        return new Observable(observer => {
            observer.next(MOCK_USERS[0]);
        })
    }


    public userGetMany(openPayments ?: boolean): Observable < Array < User >> {
        return new Observable(observer => {
            observer.next(MOCK_USERS);
        })
    }


}
