import { Point } from "./point";

/**
 * Represents a link station
 * @param coordinates the x,y co-ordinates
 * @param reach       the reach of the station
 */
export class Station {
  readonly coordinates: Point;
  readonly reach: number;
  power: number;

  constructor(coordinates: Point, reach: number) {
    this.coordinates = coordinates;
    this.reach = reach;
    this.power = 0;
  }

  /**
   * Gets the coordinates of the link station
   * @return the point
   */
  getCoordinates(): Point {
    return this.coordinates;
  }

  /**
   * Gets the individual x-cordinate of the station
   * @return x
   */
  getX(): number {
    return this.coordinates[0];
  }

  /**
   * Gets the individual y-cordinate of the station
   * @return y
   */
  getY(): number {
    return this.coordinates[1];
  }

  /**
   * Gets the reach of the station
   * @return the reach
   */
  getReach(): number {
    return this.reach;
  }

  /**
   * Gets the power of the station
   * @return power
   */
  getPower(): number {
    return this.power;
  }

  /**
   * Sets the power of the station
   */
  setPower(power: number): void {
    this.power = power;
  }
}
