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
import {Injectable, Optional} from "@angular/core";
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
import {Configuration} from "../configuration";
import {environment} from "../../../../environments/environment";
import {Offer} from "../../model/Offer";
import {toApiDate} from "../../../core/util/util.service";
import * as _ from "lodash";


/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class OffersApi {
    public basePath = environment.endpoints.HOST + environment.endpoints.STEAK_BASE_URI;
    public defaultHeaders: Headers = new Headers(environment.DEFAULT_HEADERS);
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
    public offerDelete(offerid: string): Observable<{}> {
        const path = this.basePath + `/offers/${offerid}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'offerid' is not null or undefined
        if (offerid === null || offerid === undefined) {
            throw new Error('Required parameter offerid was null or undefined when calling offerDelete.');
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
            search: queryParameters
        });


        return this.http.delete(path, requestOptions)
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
     * Offer[]
     * ...
     * @param username The username of the user that is performing the request
     * @param date
     * @param startdate
     * @param enddate
     */
    public offersGet(date?: Date, startdate?: Date, enddate?: Date): Observable<Array<Offer>> {
        const path = this.basePath + `/offers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders);
        if (date !== undefined) {
            if (date instanceof Date) {
                queryParameters.set('date', <any>toApiDate(date));
            } else {
                queryParameters.set('date', <any>date);
            }
        }

        if (startdate !== undefined) {
            if (startdate instanceof Date) {
                queryParameters.set('startdate', <any>toApiDate(startdate));
            } else {
                queryParameters.set('startdate', <any>startdate);
            }
        }

        if (enddate !== undefined) {
            if (enddate instanceof Date) {
                queryParameters.set('enddate', <any>toApiDate(enddate));
            } else {
                queryParameters.set('enddate', <any>enddate);
            }
        }


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });


        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    let offers = response.json();
                    return offers.map(o => OffersApi.inflateOfferFromJson(o));
                }
            })
            .share();
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
     * @param offer ...
     */
    public offerPost(offer: Offer): Observable<Offer> {
        const path = this.basePath + `/offers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'offer' is not null or undefined
        if (offer === null || offer === undefined) {
            throw new Error('Required parameter offer was null or undefined when calling offerPUT.');
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
            search: queryParameters
        });

        let offerData = offer as any;
        //simplify the date by capping of the time part
        offerData.date = toApiDate(offerData.date);


        return this.http.post(path, offerData, requestOptions)
            .share()
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return OffersApi.inflateOfferFromJson(response.json());
                }
            });
    }

    /**
     * OfferPut
     * Updates the Offer specified by the ID in the path
     * @param username The username of the user that is performing the request
     * @param offerid The ID for the offer, given by the DB
     */
    public offerPut(offer: Offer): Observable<Offer> {
        // verify required parameter 'offer' is not null or undefined
        if (offer === null || offer === undefined) {
            throw new Error('Required parameter offer was null or undefined when calling offerPUT.');
        }

        const path = this.basePath + `/offers/${offer._id}`;
        let headers = new Headers(this.defaultHeaders);

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
        });

        let offerData = _.cloneDeep(offer);
        //simplify the date by capping of the time part
        offerData.date = toApiDate(offerData.date);


        return this.http.put(path, offerData, requestOptions)
            .share()
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return OffersApi.inflateOfferFromJson(response.json());
                }
            });
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


    static inflateOfferFromJson(json): Offer {
        json.date = new Date(json.date);
        return json as Offer;
    }


}
