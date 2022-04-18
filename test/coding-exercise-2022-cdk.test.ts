import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import * as CodingExercise2022Cdk from '../lib/coding-exercise-2022-cdk-stack';

test('CDK matches existing snapshot', () => {
    const app = new cdk.App();
    const stack = new CodingExercise2022Cdk.CodingExercise2022CdkStack(
        app,
        'MyTestStack'
    );
    const template = Template.fromStack(stack);

    expect(template).toMatchSnapshot();
});
