//@flow
'use strict';

import { createContainer } from 'awilix';
import Metric from '../metrics/metric';
import TestMetric from '../metrics/test-metric';

export const configureContainer = function(): any
{
    const container = createContainer();
    container.registerClass(TestMetric);
}