import {toApiDate} from "./util.service";
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


});
