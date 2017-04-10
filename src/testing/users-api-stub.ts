import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MOCK_OFFER_ORDER_PAIRS, MOCK_USERS} from './mock-data';
import {OfferOrdersPair} from '../app/shared/model/OfferOrdersPair';
import {User} from '../app/shared/model/User';

@Injectable()
export class UsersApiStub {

    constructor() {
    }

    public meGET(): Observable <User> {
        return new Observable((observer) => {
            observer.next(MOCK_USERS[0]);
        });
    }

    public offersOrdersGET(useridpath: string, datepath: Date): Observable < OfferOrdersPair[]> {
        return new Observable((observer) => {
            observer.next(MOCK_OFFER_ORDER_PAIRS);
        });
    }

    public userGet(useridpath: string): Observable < User > {
        return new Observable((observer) => {
            observer.next(MOCK_USERS[0]);
        });
    }

    public userGetMany(openPayments ?: boolean): Observable < User[]> {
        return new Observable((observer) => {
            observer.next(MOCK_USERS);
        });
    }

}
