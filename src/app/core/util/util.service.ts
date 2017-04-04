import {Order} from "../../shared/model/Order";
export function toApiDate(date: Date | string): string {
    date = new Date(date.toString());
    return date.toISOString().slice(0, 10);
}

export function makeDaySubtitle(d: Date): string {

    let day = d.getDate();
    let month = d.getMonth() + 1;
    let _day = day < 10 ? "0" + day : "" + day;
    let _month = month < 10 ? "0" + month : "" + month;
    return _day + '.' + _month
}

export function makeDayTitle(date: Date): string {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[date.getDay()];
}

export enum EditMode {
    CREATE, UPDATE, DELETE
}

export function isNullOrUndefined(test) {
    return test === null || test === undefined;
}

export function roundToTwoAfterDecimal(num: number) {
    return Math.round(num * 100) / 100;
}
export function offerCountMapFromOrders(orders: Order[]): Map<string, number> {
    let map = new Map<string,number>();

    orders.forEach(order => {
        let key = order.offer.description;
        let val = map.get(key);
        !val ? map.set(key, 1) : map.set(key, ++val);
    });
    return map;
}

export let STANDARD_DESCRIPTIONS = {
    BREAKFAST_WITH_CEREAL: "Frühstück mit Müsli",
    BREAKFAST_WITHOUT_CEREAL: "Frühstück ohne Müsli",
    SMALL_SALAD: "Kleiner Salat",
    LARGE_SALAD: "Großer Salat",
    CEREAL: "Müsli",
    SOUP: "suppe"
};

export let STANDARD_TIMES = {
    BREAKFAST: "Fruehstueck",
    LUNCH: "Mittag"
}