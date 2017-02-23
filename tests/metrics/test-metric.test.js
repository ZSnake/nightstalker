import sinon from 'sinon';
import chai from 'chai';
import request from 'request';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(sinonChai);

import {testMetric} from '../../app/metrics/test-metric';

describe('Test Metric', () => {
    describe('Run metric with no substraction', () => {
        let sandbox;
        beforeEach(() => {
            sandbox = sinon.sandbox.create();
        });
        
        afterEach(() => {
            sandbox.restore();
        });
        it('should subtract 10 to the overall grade', () => {
            const result = testMetric(true);
            expect(result).to.equal(-10);
        });
        
        it('should not affect the overall grade', () => {
            const result = testMetric(false);
            expect(result).to.equal(0);
        });
    })
});
