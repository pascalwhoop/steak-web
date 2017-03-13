import {Offer} from "../app/shared/api/model/Offer";
import {OfferOrdersPair} from "../app/shared/api/model/OfferOrdersPair";
import {Order} from "../app/shared/api/model/Order";
import {User} from "../app/shared/api/model/User";


export const MOCK_OFFERS: Offer[] = [
    {
        "_id": "58a47bd88fdd83084b5c88a2",
        "description": "Gem\ufffdseeintopf mit Rauchfleisch und Siedewurst",
        "vegetarian": false,
        "price": 5,
        "time": "Fruehstueck",
        "date": new Date("2013-05-11T00:00:00.000Z"),
        "main_offer": true,
        "heat": 40
    },
    {
        "_id": "58a47bd88fdd83084b5c88a3",
        "description": "Wirsingeintopf mit Mettenden und durchw. Speck",
        "vegetarian": false,
        "price": 5,
        "time": "Mittag",
        "date": new Date("2013-05-11T00:00:00.000Z"),
        "main_offer": false,
        "heat": 80
    },
    {
        "_id": "58a47bd88fdd83084b5c88a4",
        "description": "Karottencremesuppe",
        "vegetarian": true,
        "price": 1,
        "time": "Fruehstueck",
        "date": new Date("2013-05-11T00:00:00.000Z"),
        "main_offer": true,
        "heat": 60
    },
    {
        "_id": "58a47bd88fdd83084b5c88a5",
        "description": "Eieromelett mit Gem\ufffdsef\ufffdllung und Kroketten",
        "vegetarian": true,
        "price": 4,
        "time": "Mittag",
        "date": new Date("2013-10-04T00:00:00.000Z"),
        "main_offer": false,
        "heat": 70
    }
];

export const MOCK_OFFER_ORDER_PAIR: OfferOrdersPair[] = [
    {
        "offer": {
            "_id": "58aafa33fcf99f402c680c49",
            "description": "Backfisch mit Remoulade, Bratkartoffeln und Salatteller",
            "vegetarian": false,
            "price": 5,
            "time": "Fruehstueck",
            "date": new Date("2017-02-22T00:00:00.000Z"),
            "main_offer": true,
            "heat": -40
        },
        "orders": [
            {
                "_id": "58ab03d320f496430c230559",
                "employee_id": "pbr",
                "takeaway_Flag": true,
                "paid": false,
                "amount": 5
            }
        ]
    },
    {
        "offer": {
            "_id": "58aafa33fcf91f402c68012c",
            "description": "Kraut mit Rueben",
            "vegetarian": false,
            "price": 5,
            "time": "Fruehstueck",
            "date": new Date("2017-02-22T00:00:00.000Z"),
            "main_offer": true,
            "heat": -40
        },
        "orders": [
            {
                "_id": "58ab03d320f493430c230949",
                "employee_id": "pbr",
                "takeaway_Flag": true,
                "paid": false,
                "amount": 5
            }
        ]
    }
];

export const MOCK_ORDERS: Order[] = [
    {
        "_id": "58ab03d320f496430c230559",
        "employee_id": "pbr",
        "takeaway_Flag": true,
        "paid": false,
        "offer": {
            "_id": "58aafa33fcf99f402c680c49",
            "description": "Backfisch mit Remoulade, Bratkartoffeln und Salatteller",
            "vegetarian": false,
            "price": 5,
            "time": "Fruehstueck",
            "date": new Date("2017-02-22T00:00:00.000Z"),
            "main_offer": true,
            "heat": -40
        },
        "amount": 5
    },
    {
        "_id": "58ab0a3cd555c54fdb5ca7e4",
        "employee_id": "pbr",
        "takeaway_Flag": true,
        "paid": false,
        "offer": {
            "_id": "58ab0a21d555c54fdb5ca7e3",
            "description": "Pudding alla schwarzes Loch",
            "vegetarian": false,
            "price": 5,
            "time": "lunch",
            "date": new Date("2017-02-21T00:00:00.000Z"),
            "main_offer": true,
            "heat": 40
        },
        "amount": 5
    }
];

export const MOCK_USERS: User [] = [
    {
        employeeId: 'abc',
        openPaymentsSum: 1000
    },
    {
        employeeId: 'afg',
        openPaymentsSum: 421
    },
    {
        employeeId: 'cde',
        openPaymentsSum: 12312
    }
];