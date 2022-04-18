import { getDistance, getPower } from './misc';

describe('Some tests of the basic math functions', function () {
    describe('getDistance', function () {
        it('should return 0 on the same inputs', function () {
            expect(getDistance([0, 0], [0, 0])).toBe(0);
        });
        it('should return correct value for known inputs', function () {
            expect(getDistance([1, 5], [10, 2])).toBe(9.486832980505138);
        });
    });

    describe('getPower', function () {
        it('should return 0 when distance is more than reach', function () {
            expect(getPower(5, 10)).toBe(0);
        });
        it('should return correct value in normal circumstances', function () {
            expect(getPower(5, 3)).toBe(4);
        });
    });
});
