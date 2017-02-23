import sinon from 'sinon';
import chai from 'chai';
import request from 'request';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(sinonChai);

import TestMetric from '../../app/metrics/test-metric';

describe('Test Metric', () => {
    describe('Run metric with no substraction', () => {
        let sandbox;

		beforeEach(() => {
			sandbox = sinon.sandbox.create();
		});
		afterEach(() => {
			sandbox.restore();
		});

        const testMetric = new TestMetric() ;
        const result = testMetric.run(false);
        expect(result).to.equal(0);
    })
})