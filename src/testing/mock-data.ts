import {Offer} from "../app/shared/api/model/Offer";
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
        "date": new Date("2013-05-11T00:00:00.000Z"),
        "main_offer": false,
        "heat": 70
    }
];