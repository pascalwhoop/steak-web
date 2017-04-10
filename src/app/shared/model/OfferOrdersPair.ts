import {Order} from './Order';
import {Offer} from './Offer';

export interface OfferOrdersPair {
    offer: Offer;

    orders: Order[];

}
