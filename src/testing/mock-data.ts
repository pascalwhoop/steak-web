import {Offer} from '../app/shared/model/Offer';
import {OfferOrdersPair} from '../app/shared/model/OfferOrdersPair';
import {Order} from '../app/shared/model/Order';
import {User} from '../app/shared/model/User';

export const MOCK_OFFERS: Offer[] = [
    {
        '_id': '58a47bd88fdd83084b5c88a2',
        'description': 'Gem\ufffdseeintopf mit Rauchfleisch und Siedewurst',
        'vegetarian': false,
        'price': 5,
        'time': 'Fruehstueck',
        'date': new Date('2013-05-11T00:00:00.000Z'),
        'main_offer': true,
        'heat': 40,
    },
    {
        '_id': '58a47bd88fdd83084b5c88a3',
        'description': 'Wirsingeintopf mit Mettenden und durchw. Speck',
        'vegetarian': false,
        'price': 5,
        'time': 'Mittag',
        'date': new Date('2013-05-11T00:00:00.000Z'),
        'main_offer': false,
        'heat': 80,
    },
    {
        '_id': '58a47bd88fdd83084b5c88a4',
        'description': 'Karottencremesuppe',
        'vegetarian': true,
        'price': 1,
        'time': 'Fruehstueck',
        'date': new Date('2013-05-11T00:00:00.000Z'),
        'main_offer': true,
        'heat': 60,
    },
    {
        '_id': '58a47bd88fdd83084b5c88a5',
        'description': 'Eieromelett mit Gem\ufffdsef\ufffdllung und Kroketten',
        'vegetarian': true,
        'price': 4,
        'time': 'Mittag',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 70,
    },
    {
        '_id': '58a47bd88fdd83064b5c88a2',
        'description': 'Backfisch mit Remoulade, Bratkartoffeln und Salatteller',
        'vegetarian': false,
        'price': 7.25,
        'time': 'Fruehstueck',
        'date': new Date('2017-02-22T00:00:00.000Z'),
        'main_offer': true,
        'heat': -40,
    },
];

export const MOCK_OFFER_ORDER_PAIRS: OfferOrdersPair[] = [
    {
        'offer': {
            '_id': '58aafa33fcf99f402c680c49',
            'description': 'Backfisch mit Remoulade, Bratkartoffeln und Salatteller',
            'vegetarian': false,
            'price': 5,
            'time': 'Fruehstueck',
            'date': new Date('2017-02-22T00:00:00.000Z'),
            'main_offer': true,
            'heat': -40,
        },
        'orders': [
            {
                '_id': '58ab03d320f496430c230559',
                'employee_id': 'xxx',
                'takeaway_flag': true,
                'paid': false,
                'amount': 5,
            },
        ],
    },
    {
        'offer': {
            '_id': '58aafa33fcf91f402c68012c',
            'description': 'Kraut mit Rueben',
            'vegetarian': false,
            'price': 5,
            'time': 'Fruehstueck',
            'date': new Date('2017-02-22T00:00:00.000Z'),
            'main_offer': true,
            'heat': -40,
        },
        'orders': [
            {
                '_id': '58ab03d320f493430c230949',
                'employee_id': 'xxx',
                'takeaway_flag': true,
                'paid': false,
                'amount': 5,
            },
        ],
    },
];

export const MOCK_ORDERS: Order[] = [
    {
        '_id': '58ab03d320f496430c230559',
        'employee_id': 'xxx',
        'takeaway_flag': true,
        'paid': false,
        'offer': {
            '_id': '58a47bd88fdd823f84b5c88a2',
            'description': 'Backfisch mit Remoulade, Bratkartoffeln und Salatteller',
            'vegetarian': false,
            'price': 7.25,
            'time': 'Fruehstueck',
            'date': new Date('2017-02-22T00:00:00.000Z'),
            'main_offer': true,
            'heat': -40,
        },
        'amount': 7.25,
    },
    {
        '_id': '58ab0a3cd555c54fdb5ca7e4',
        'employee_id': 'xxx',
        'takeaway_flag': true,
        'paid': false,
        'offer': {
            '_id': '58a47bd88fdd83084b5c88a2',
            'description': 'Pudding alla schwarzes Loch',
            'vegetarian': true,
            'price': 5,
            'time': 'lunch',
            'date': new Date('2017-02-21T00:00:00.000Z'),
            'main_offer': true,
            'heat': 40,
        },
        'amount': 5,
    },
];

export const MOCK_COMPLETE_DAY: Offer[] = [
    {
        '_id': '58a47bd88fdd83084b5c88a2',
        'description': 'Gemüseeintopf mit Rauchfleisch und Siedewurst',
        'vegetarian': false,
        'price': 5,
        'time': 'Mittag',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': true,
        'heat': 40,
    },
    {
        '_id': '58a47bd88fdd83084b5c88a3',
        'description': 'Knödl mit Reis',
        'vegetarian': true,
        'price': 5,
        'time': 'Mittag',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': true,
        'heat': 80,
    },
    {
        '_id': '58a47bd88fdd83084b5c88a4',
        'description': 'Karottencremesuppe',
        'vegetarian': true,
        'price': 3,
        'time': 'Mittag',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 60,
    },
    {
        '_id': '58a47bd88fdd83084b5c8909',
        'description': 'Frühstück mit Müsli',
        'vegetarian': false,
        'price': 3,
        'time': 'Fruehstueck',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 45,
    },
    {
        '_id': '58a47bdf38fdd83084b5c8909',
        'description': 'Frühstück ohne Müsli',
        'vegetarian': false,
        'price': 2.5,
        'time': 'Fruehstueck',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 45,
    },
    {
        '_id': '58a47bdf38fd4f3f084b5c8909',
        'description': 'Müsli',
        'vegetarian': false,
        'price': 2.5,
        'time': 'Fruehstueck',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 7,
    },
    {
        '_id': '58a47bd88fd483084b5c88a5',
        'description': 'Kleiner Salat',
        'vegetarian': true,
        'price': 4,
        'time': 'Mittag',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 70,
    },
    {
        '_id': '58a47bd88fdd83084b5c88a5',
        'description': 'Großer Salat',
        'vegetarian': true,
        'price': 4,
        'time': 'Mittag',
        'date': new Date('2013-10-04T00:00:00.000Z'),
        'main_offer': false,
        'heat': 70,
    },
];

export const MOCK_USERS: User [] = [
    {
        employeeId: 'abc',
        openPaymentsSum: 1000,
    },
    {
        employeeId: 'afg',
        openPaymentsSum: 421,
    },
    {
        employeeId: 'cde',
        openPaymentsSum: 12312,
    },
];