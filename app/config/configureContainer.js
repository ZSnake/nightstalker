//@flow
'use strict';
import { createContainer, asClass, asFunction } from 'awilix'
import { testMetric } from '../metrics/test-metric';
import helloHandler from '../handlers/hello/hello-handler'

export default () => 
{
    const container: any = createContainer();
    container.register({
        TestMetric: asFunction(testMetric),
        HelloHandler: asClass(helloHandler),
    });
    return container;
}