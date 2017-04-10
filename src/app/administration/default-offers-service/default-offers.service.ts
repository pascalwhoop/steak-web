import {Injectable} from '@angular/core';
import {Offer} from '../../shared/model/Offer';

@Injectable()
export class DefaultOffersService {

    constructor() {
    }

    getDefaultOffers(date: Date): Offer[] {
        return [
            {
                'description': 'Frühstück mit Müsli',
                'vegetarian': false,
                'price': 3.25,
                'time': 'Fruehstueck',
                'date': date,
                'main_offer': false,
                'heat': 20,
            },
            {
                'description': 'Frühstück ohne Müsli',
                'vegetarian': false,
                'price': 2.75,
                'time': 'Fruehstueck',
                'date': date,
                'main_offer': false,
                'heat': 20,
            },
            {
                'description': 'Müsli',
                'vegetarian': true,
                'price': 1,
                'time': 'Fruehstueck',
                'date': date,
                'main_offer': false,
                'heat': 20,
            },
            {
                'description': 'Kleiner Salat',
                'vegetarian': true,
                'price': 1.25,
                'time': 'Mittag',
                'date': date,
                'main_offer': false,
                'heat': 20,
            },
            {
                'description': 'Großer Salat',
                'vegetarian': true,
                'price': 2.5,
                'time': 'Mittag',
                'date': date,
                'main_offer': false,
                'heat': 20,
            },
        ];
    }

}
