import {ObjectToArrayPipe} from "./object-to-array.pipe";

describe('ObjectToArrayPipe', () => {
    let pipe;
    beforeEach(function () {
        pipe = new ObjectToArrayPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should turn an object of stuff into an array of its values', function () {
        let input = {a: 'foo', b: 'bar', c: 'toodel'};
        let output = pipe.transform(input);
        expect(output[0] == input.a).toBe(true);
        expect(output[1] == input.b).toBe(true);
        expect(output[2] == input.c).toBe(true);
    });
});
