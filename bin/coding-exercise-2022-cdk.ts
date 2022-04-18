#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';

import { CodingExercise2022CdkStack } from '../lib/coding-exercise-2022-cdk-stack';

const app = new App();
new CodingExercise2022CdkStack(app, 'CodingExercise2022CdkStack');
