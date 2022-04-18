import { Point } from './point';
import { Station } from './station';
import { findBestStation, removeOutOfReachStations } from './station_finder';

describe('station_finder', () => {
    it('removeOutOfReachStations removes stations out of reach', () => {
        const station = new Station([0, 0], 5);
        station.setPower(5);
        expect(removeOutOfReachStations(station)).toBe(true);
    });

    const points: Point[] = [
        [0, 0],
        [100, 100],
        [15, 10],
        [18, 18],
    ];

    describe.each(points)('finds the best station for point', (x, y) => {
        it('finds the best station', () => {
            const stations = [
                new Station([0, 0], 10),
                new Station([20, 20], 5),
                new Station([10, 0], 12),
            ];
            expect(findBestStation(stations, [x, y])).toMatchSnapshot();
        });
    });
});
