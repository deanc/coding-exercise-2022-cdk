import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    testMatch: ['**/*.test.ts'],
};
export default config;
