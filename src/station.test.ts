import { Point } from './point';
import { Station } from './station';

describe('station', () => {
    let coords: Point;
    let station: Station;

    beforeEach(() => {
        coords = [1, 2];
        station = new Station([1, 2], 5);
    });
    it('returns co-ordinates', () => {
        expect(station.getCoordinates()).toStrictEqual(coords);
    });
    it('returns x co-ordinate', () => {
        expect(station.getX()).toBe(1);
    });
    it('returns y co-ordinate', () => {
        expect(station.getY()).toBe(2);
    });
    it('returns reach', () => {
        expect(station.getReach()).toBe(5);
    });
    it('sets and gets power', () => {
        station.setPower(10);
        expect(station.getPower()).toBe(10);
    });
});
