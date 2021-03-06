/**
 * STEAK
 * Kantinen-API
 *
 * OpenAPI spec version: 0.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {Injectable, Optional} from '@angular/core';
import {
    Headers,
    Http,
    RequestMethod,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    URLSearchParams,
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../../model/models';
import {Configuration} from '../configuration';
import {environment} from '../../../../environments/environment';
import {OrderBooking} from '../../model/OrderBooking';
import {Order} from '../../model/Order';
import {isNullOrUndefined, toApiDate} from '../../../core/util/util.service';

/* tslint:disable:no-unused-variable member-ordering */

@Injectable()
export class OrdersApi {
    public basePath = environment.endpoints.HOST + environment.endpoints.STEAK_BASE_URI;
    public defaultHeaders: Headers = new Headers(environment.DEFAULT_HEADERS);
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * OrderDELETE
     * Deletes the Order specified by the ID in the path
     * @param orderid The ID for the order, given by the DB
     */
    public orderDelete(orderid: string): Observable<{}> {
        const path = this.basePath + `/orders/${orderid}`;

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'orderid' is not null or undefined
        if (orderid === null || orderid === undefined) {
            throw new Error('Required parameter orderid was null or undefined when calling orderDelete.');
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
        });

        let obs = this.http.delete(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            })
            .publish();
        obs.connect();

        //this.vfeedback.showMessageOnAnswer('Order deleted!', 'Oops', obs);
        return obs;
    }

    /**
     * OrderGET
     * ...
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderGetOne(username: string, orderid: string, extraHttpRequestParams?: any): Observable<models.Order> {
        return this.orderGetOneWithHttpInfo(username, orderid, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return OrdersApi.inflateOrderFromJson(response.json());
                }
            });
    }

    public orderPost(offerId: string, takeaway: boolean): Observable<Order> {

        const path = this.basePath + `/orders`;
        let headers = new Headers(this.defaultHeaders);
        let orderBooking: OrderBooking = {offer_id: offerId, takeaway_flag: takeaway};

        // verify required parameter 'orderBooking' is not null or undefined
        if (!offerId) {
            throw new Error('Required parameter offerId was null or undefined when calling orderPUT.');
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
        });

        return this.http.post(path, orderBooking, requestOptions)
            .share()
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Updates the Order specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderPut(username: string, orderid: string, extraHttpRequestParams?: any): Observable<Order> {
        return null;
    }

    /**
     * Order[]
     * Alle Bestellungen
     * @param startdate
     * @param date
     * @param enddate
     * @param userid The user id for which to fetch data
     * @param openPayments A flag that can be set to true to only get employees with open payments
     */
    public ordersGET(startdate?: Date, date?: Date, enddate?: Date, userid?: string, openPayments?: boolean): Observable<models.Order[]> {
        const path = this.basePath + `/orders`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());

        if (startdate) {
            queryParameters.set('startdate', toApiDate(startdate));
        }

        if (date) {
            queryParameters.set('date', toApiDate(date));
        }

        if (enddate) {
            queryParameters.set('enddate', toApiDate(enddate));
        }

        if (userid) {
            queryParameters.set('userid', <any>userid);
        }

        if (!isNullOrUndefined(openPayments)) {
            queryParameters.set('open_payments', <any>openPayments);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
            search: queryParameters,
        });

        return this.http.get(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json().map((oJson) => OrdersApi.inflateOrderFromJson(oJson));
                }
            });
    }

    /**
     * OrderGET
     * ...
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderGetOneWithHttpInfo(username: string, orderid: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/orders/${orderid}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling orderGetOne.');
        }
        // verify required parameter 'orderid' is not null or undefined
        if (orderid === null || orderid === undefined) {
            throw new Error('Required parameter orderid was null or undefined when calling orderGetOne.');
        }
        headers.set('username', String(username));

        // to determine the Content-Type header
        let consumes: string[] = [];

        // to determine the Accept header
        let produces: string[] = [
            'application/json',
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    static inflateOrderFromJson(json): Order {
        if (json.date) json.date = new Date(json.date);
        if (json.offer.date) json.offer.date = new Date(json.offer.date);
        return json as Order;
    }

}
