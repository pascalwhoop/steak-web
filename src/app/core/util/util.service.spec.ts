import {offerCountMapFromOrders, toApiDate} from "./util.service";
import {MOCK_ORDERS} from "../../../testing/mock-data";
describe('UtilService', () => {
    beforeEach(() => {

    });

    describe('toApiDate', function () {
        it('should convert a date or string of date to a propper formated API date string (without time)', () => {
            let dateString = '2015-05-05T00:00:00.000Z';
            let date = new Date(dateString);
            expect(toApiDate(date)).toEqual('2015-05-05');
            expect(toApiDate(dateString)).toEqual('2015-05-05');

        });
    });

    describe('offerCountMapFromOrders', function(){
        it('should give back a list of offers, giving the number of orders per offer as a map', () => {
            let orders = MOCK_ORDERS;
            // make more than 2 mock offers. it contains 3x the Backfisch and 4x the Pudding
            let manyOrders = [].concat(orders, orders, orders, orders).slice(1);
            let offerCountMap = offerCountMapFromOrders(manyOrders);
            expect(offerCountMap.get('Pudding alla schwarzes Loch')).toBe(4);
            expect(offerCountMap.get('Backfisch mit Remoulade, Bratkartoffeln und Salatteller')).toBe(3);

        });
    });



});
