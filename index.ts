import * as util from 'util';

import { Point } from './src/point';
import { Station } from './src/station';
import { findBestStation } from './src/station_finder';

const stations = [
    new Station([0, 0], 10),
    new Station([20, 20], 5),
    new Station([10, 0], 12),
];

const points: Point[] = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18],
];

// iterate through points to find the best station for each
points.map((point) => {
    const bestStation = findBestStation(stations, point);

    if (!bestStation) {
        console.log(
            util.format(
                'No link station within reach for point [%d,%d]',
                point[0],
                point[1]
            )
        );
    } else {
        console.log(
            util.format(
                'Best link station for point [%d,%d] is [%d,%d] with power %d',
                point[0],
                point[1],
                bestStation.getX(),
                bestStation.getY(),
                bestStation.getPower()
            )
        );
    }
});
