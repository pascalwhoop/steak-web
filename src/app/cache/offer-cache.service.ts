import {Injectable} from "@angular/core";
import {Offer} from "../shared/model/Offer";

@Injectable()
export class OfferCacheService {

    private _offers: Map<string, Offer>;

    constructor() {
        this._offers = new Map<string, Offer>();
        let offers = <Offer[]>JSON.parse(localStorage.getItem('offers'));
        if (offers) this._putManyInMemory(offers);
    }


    get offers(): Offer[] {
        return this._getOffersAsArray();
    }

    private _getOffersAsArray() {
        let it = this._offers.values();
        return Array.from(it);
    }

    put(offer: Offer): void {
        this._putInMemory(offer);
        this.flushValuesToStorage();
    }

    private flushValuesToStorage() {
        localStorage.setItem('offers', JSON.stringify(this._getOffersAsArray()));
    }

    private _putInMemory(offer: Offer): void {
        this._offers.set(offer._id, offer);
    }

    putMany(offers: Offer[]): void {
        this._putManyInMemory(offers);
        this.flushValuesToStorage();
    }

    private _putManyInMemory(offers: Offer[]) {
        offers.forEach(offer => this._putInMemory(offer));
    }

    find(searchString: string): Offer[] {
        searchString = searchString.toLowerCase();
        let offersArray = this._getOffersAsArray();
        return offersArray.filter(offer => offer.description.toLowerCase().indexOf(searchString) >= 0);
    }
}
