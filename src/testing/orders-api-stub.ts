import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Order} from '../app/shared/model/Order';
import {OrderBooking} from '../app/shared/model/OrderBooking';
import {MOCK_ORDERS} from './mock-data';

@Injectable()
export class OrdersApiStub {

    constructor() {
    }

    public orderDelete(orderid: string, extraHttpRequestParams?: any): Observable<{}> {
        return new Observable((observer) => {
            observer.next({});
            observer.complete();

        });
    }

    public orderGetOne(orderid: string, extraHttpRequestParams?: any): Observable<Order> {
        return new Observable((observer) => {
            observer.next(MOCK_ORDERS[0]);
            observer.complete();

        });
    }

    public orderPUT(orderBooking: OrderBooking, extraHttpRequestParams?: any): Observable<Order> {
        return new Observable((observer) => {
            observer.next(MOCK_ORDERS[0]);
            observer.complete();

        });
    }

    public orderPost(orderid: string, order: Order): Observable<Order> {
        return new Observable((observer) => {
            observer.next(order);
            observer.complete();

        });
    }

    public ordersGET(startdate?: Date, date?: Date, enddate?: Date, userid?: string, openPayments?: boolean): Observable<Order[]> {
        return new Observable((observer) => {
            observer.next(MOCK_ORDERS);
            observer.complete();
        });
    }

}
