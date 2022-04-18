import { getDistance, getPower } from './misc';
import { Point } from './point';
import { Station } from './station';

/**
 * Utility function to remove stations whose power is not enough
 * Should be passed into Array.filter()
 * @param  station Station
 * @return
 */
export const removeOutOfReachStations = (station: Station): boolean =>
    station.getPower() > 0;

/**
 * Comparison function to find the highest powered link station
 * @param  a
 * @param  b
 * @return   [description]
 */

const highestPoweredStation = (a: Station, b: Station): any =>
    a.getPower() < b.getPower();

/**
 * Finds the best link station for a given point [x,y]
 * @param  point the point to search against
 * @return       the best link station
 */
export const findBestStation = (
    stations: Station[],
    point: Point
): Station | undefined =>
    stations
        .map((station) => {
            const power = getPower(
                station.getReach(),
                getDistance(point, station.getCoordinates())
            );
            station.setPower(power);
            return station;
        })
        .filter(removeOutOfReachStations)
        .sort(highestPoweredStation)
        .pop();
