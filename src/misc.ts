import { Point } from './point';

export const getPower = (reach: number, distance: number): number => {
    if (distance > reach) {
        return 0;
    }
    return Math.pow(reach - distance, 2);
};

export const getDistance = (a: Point, b: Point): number =>
    Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
