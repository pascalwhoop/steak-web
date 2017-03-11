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
import {Inject, Injectable, Optional} from "@angular/core";
import {
    Http,
    Headers,
    URLSearchParams,
    RequestMethod,
    RequestOptions,
    RequestOptionsArgs,
    Response
} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import * as models from "../model/models";
import {Configuration} from "../configuration";
import {environment} from "../../../../environments/environment";


/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class OrdersApi {
    public basePath = environment.endpoints.HOST + environment.endpoints.STEAK_BASE_URI;
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * OrderDELETE
     * Deletes the Order specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderDelete(username: string, orderid: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.orderDeleteWithHttpInfo(username, orderid, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
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
                    return response.json();
                }
            });
    }

    /**
     * Create new order
     * ...
     * @param username The username of the user that is performing the request
     * @param orderBooking ...
     */
    public orderPUT(username: string, orderBooking: models.OrderBooking, extraHttpRequestParams?: any): Observable<models.Order> {
        return this.orderPUTWithHttpInfo(username, orderBooking, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * OrderPOST
     * Updates the Order specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderPost(username: string, orderid: string, extraHttpRequestParams?: any): Observable<models.Order> {
        return this.orderPostWithHttpInfo(username, orderid, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Order[]
     * Alle Bestellungen
     * @param username The username of the user that is performing the request
     * @param startdate
     * @param date
     * @param enddate
     * @param userid The user id for which to fetch data
     * @param cursor Pagination cursor. If there is not a limit defined, each cursor result gives back 30 results
     * @param limit Result limiter.
     * @param openPayments A flag that can be set to true to only get employees with open payments
     */
    public ordersGET(username: string, startdate?: Date, date?: Date, enddate?: Date, userid?: string, cursor?: string, limit?: number, openPayments?: boolean, extraHttpRequestParams?: any): Observable<Array<models.Order>> {
        return this.ordersGETWithHttpInfo(username, startdate, date, enddate, userid, cursor, limit, openPayments, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * OrderDELETE
     * Deletes the Order specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderDeleteWithHttpInfo(username: string, orderid: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/orders/${orderid}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling orderDelete.');
        }
        // verify required parameter 'orderid' is not null or undefined
        if (orderid === null || orderid === undefined) {
            throw new Error('Required parameter orderid was null or undefined when calling orderDelete.');
        }
        headers.set('username', String(username));

        // to determine the Content-Type header
        let consumes: string[] = [];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
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
            'application/json'
        ];



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create new order
     * ...
     * @param username The username of the user that is performing the request
     * @param orderBooking ...
     */
    public orderPUTWithHttpInfo(username: string, orderBooking: models.OrderBooking, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/orders`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling orderPUT.');
        }
        // verify required parameter 'orderBooking' is not null or undefined
        if (orderBooking === null || orderBooking === undefined) {
            throw new Error('Required parameter orderBooking was null or undefined when calling orderPUT.');
        }
        headers.set('username', String(username));

        // to determine the Content-Type header
        let consumes: string[] = [];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];



        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: orderBooking == null ? '' : JSON.stringify(orderBooking), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * OrderPOST
     * Updates the Order specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param orderid The ID for the order, given by the DB
     */
    public orderPostWithHttpInfo(username: string, orderid: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/orders/${orderid}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling orderPost.');
        }
        // verify required parameter 'orderid' is not null or undefined
        if (orderid === null || orderid === undefined) {
            throw new Error('Required parameter orderid was null or undefined when calling orderPost.');
        }
        headers.set('username', String(username));

        // to determine the Content-Type header
        let consumes: string[] = [];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Order[]
     * Alle Bestellungen
     * @param username The username of the user that is performing the request
     * @param startdate
     * @param date
     * @param enddate
     * @param userid The user id for which to fetch data
     * @param cursor Pagination cursor. If there is not a limit defined, each cursor result gives back 30 results
     * @param limit Result limiter.
     * @param openPayments A flag that can be set to true to only get employees with open payments
     */
    public ordersGETWithHttpInfo(username: string, startdate?: Date, date?: Date, enddate?: Date, userid?: string, cursor?: string, limit?: number, openPayments?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/orders`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling ordersGET.');
        }
        if (startdate !== undefined) {
                queryParameters.set('startdate', <any>startdate);
        }

        if (date !== undefined) {
                queryParameters.set('date', <any>date);
        }

        if (enddate !== undefined) {
                queryParameters.set('enddate', <any>enddate);
        }

        if (userid !== undefined) {
                queryParameters.set('userid', <any>userid);
        }

        if (cursor !== undefined) {
            queryParameters.set('cursor', <any>cursor);
        }

        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
        }

        if (openPayments !== undefined) {
                queryParameters.set('open_payments', <any>openPayments);
        }

        headers.set('username', String(username));

        // to determine the Content-Type header
        let consumes: string[] = [];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
