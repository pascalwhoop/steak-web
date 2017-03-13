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
    Response,
    ResponseContentType
} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Configuration} from "../configuration";
import {environment} from "../../../../environments/environment";
import {Offer} from "../model/Offer";


/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class OffersApi {
    public basePath = environment.endpoints.HOST + environment.endpoints.STEAK_BASE_URI;
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * OfferDELETE
     * Deletes the Offer specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param offerid The ID for the offer, given by the DB
     */
    public offerDelete(username: string, offerid: string): Observable<{}> {
        return this.offerDeleteWithHttpInfo(username, offerid)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Offer[]
     * ...
     * @param username The username of the user that is performing the request
     * @param date
     * @param startdate
     * @param enddate
     */
    public offersGet(date?: Date, startdate?: Date, enddate?: Date): Observable<Array<Offer>> {
        return this.offerGetWithHttpInfo(date, startdate, enddate)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    let offers = response.json();
                    return offers.map(o => OffersApi.inflateOfferFromJson(o));
                }
            });
    }

    /**
     * Offer
     * ...
     * @param username The username of the user that is performing the request
     * @param offerid The ID for the offer, given by the DB
     */
    public offerGetOne(username: string, offerid: string): Observable<Offer> {
        return this.offerGetOneWithHttpInfo(username, offerid)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return OffersApi.inflateOfferFromJson(response.json());
                }
            });
    }

    /**
     * Create new Offer
     * ...
     * @param username The username of the user that is performing the request
     * @param offerData ...
     */
    public offerPUT(offerData: Offer): Observable<Offer> {
        return this.offerPUTWithHttpInfo(offerData)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return OffersApi.inflateOfferFromJson(response.json());
                }
            });
    }

    /**
     * OfferPOST
     * Updates the Offer specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param offerid The ID for the offer, given by the DB
     */
    public offerPost(offer: Offer): Observable<Offer> {
        // return this.offerPostWithHttpInfo(username, offerid)
        //     .map((response: Response) => {
        //         if (response.status === 204) {
        //             return undefined;
        //         } else {
        //             return response.json();
        //         }
        //     });
        return null;
    }


    /**
     * OfferDELETE
     * Deletes the Offer specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param offerid The ID for the offer, given by the DB
     */
    public offerDeleteWithHttpInfo(username: string, offerid: string): Observable<Response> {
        const path = this.basePath + `/offers/${offerid}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling offerDelete.');
        }
        // verify required parameter 'offerid' is not null or undefined
        if (offerid === null || offerid === undefined) {
            throw new Error('Required parameter offerid was null or undefined when calling offerDelete.');
        }
        headers.set('username', String(username));


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });


        return this.http.request(path, requestOptions);
    }

    /**
     * Offer[]
     * ...
     * @param username The username of the user that is performing the request
     * @param date
     * @param startdate
     * @param enddate
     */
    public offerGetWithHttpInfo(date?: Date, startdate?: Date, enddate?: Date): Observable<Response> {
        const path = this.basePath + `/offers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (date !== undefined) {
            if (date instanceof Date) {
                queryParameters.set('date', <any>date.toISOString());
            } else {
                queryParameters.set('date', <any>date);
            }
        }

        if (startdate !== undefined) {
            if (startdate instanceof Date) {
                queryParameters.set('startdate', <any>startdate.toISOString());
            } else {
                queryParameters.set('startdate', <any>startdate);
            }
        }

        if (enddate !== undefined) {
            if (enddate instanceof Date) {
                queryParameters.set('enddate', <any>enddate.toISOString());
            } else {
                queryParameters.set('enddate', <any>enddate);
            }
        }


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });


        return this.http.request(path, requestOptions);
    }

    /**
     * Offer
     * ...
     * @param username The username of the user that is performing the request
     * @param offerid The ID for the offer, given by the DB
     */
    public offerGetOneWithHttpInfo(username: string, offerid: string): Observable<Response> {
        const path = this.basePath + `/offers/${offerid}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling offerGetOne.');
        }
        // verify required parameter 'offerid' is not null or undefined
        if (offerid === null || offerid === undefined) {
            throw new Error('Required parameter offerid was null or undefined when calling offerGetOne.');
        }
        headers.set('username', String(username));


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });


        return this.http.request(path, requestOptions);
    }

    /**
     * Create new Offer
     * ...
     * @param username The username of the user that is performing the request
     * @param offerData ...
     */
    public offerPUTWithHttpInfo(offerData: Offer): Observable<Response> {
        const path = this.basePath + `/offers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'offerData' is not null or undefined
        if (offerData === null || offerData === undefined) {
            throw new Error('Required parameter offerData was null or undefined when calling offerPUT.');
        }
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: offerData == null ? '' : JSON.stringify(offerData), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });


        return this.http.request(path, requestOptions);
    }

    static inflateOfferFromJson(json): Offer {
        json.date = new Date(json.date);
        return json as Offer;
    }


}
