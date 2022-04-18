import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import * as path from 'path';

export class CodingExercise2022CdkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const stationFinderHandler = new NodejsFunction(
            this,
            'station-finder',
            {
                memorySize: 128,
                timeout: Duration.seconds(3),
                runtime: Runtime.NODEJS_14_X,
                handler: 'main',
                entry: path.join(__dirname, `/../src/handlers/station.ts`),
            }
        );

        const api = new RestApi(this, 'coding-exercise-api', {
            restApiName: 'Coding Exercise API',
            description: 'Example api gateway for the coding exercise',
        });

        const stationFingerIntegration = new LambdaIntegration(
            stationFinderHandler,
            { proxy: true }
        );

        api.root.addMethod('POST', stationFingerIntegration);
    }
}
