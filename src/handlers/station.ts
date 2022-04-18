import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

import { Point } from '../point';
import { Station } from '../station';
import { findBestStation } from '../station_finder';

export async function main(
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
    console.log('request:', JSON.stringify(event, undefined, 2));

    if (!event.body) {
        return errorHandler('Empty POST body');
    }

    const parsedBody = JSON.parse(event.body);

    // NOTE: we would validate the JSON object here in a real-world scenario before
    // casting it to our desired type. For now we have basic validation below.
    const body = parsedBody as StationFinderRequest;

    const { stations, points } = body;
    if (!body.stations || !body.points) {
        return errorHandler('Invalid parameters');
    }

    const mappedStations = stationsMapper(stations);

    const response = points.map((point: Point) => {
        const bestStation = findBestStation(mappedStations, point);

        return {
            point,
            ...(bestStation && {
                station: {
                    x: bestStation.getX(),
                    y: bestStation.getY(),
                    power: bestStation.getPower(),
                },
            }),
        };
    });

    return {
        statusCode: 200,
        headers: {},
        body: JSON.stringify(response),
    };
}

const errorHandler = (
    message: string,
    statusCode = 400
): APIGatewayProxyResultV2 => {
    return {
        statusCode,
        headers: {},
        body: JSON.stringify({ message }),
    };
};

interface IncomingStation {
    coordinates: Point;
    reach: number;
}

interface StationFinderRequest {
    points: Point[];
    stations: IncomingStation[];
}

const stationsMapper = (stationObjects: IncomingStation[]): Station[] =>
    stationObjects.map((obj) => new Station(obj.coordinates, obj.reach));
