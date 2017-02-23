import sinon from 'sinon';
import chai from 'chai';
import request from 'request';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(sinonChai);

import HelloHandler from '../../app/handlers/hello/hello-handler';

describe('Test Metric', () => {
    describe('Run metric with no substraction', () => {
        let sandbox;
        beforeEach(() => {
            sandbox = sinon.sandbox.create();
        });
        
        afterEach(() => {
            sandbox.restore();
        });
        console.log('alskdfmalksdfm')
        it('should return hello world', () => {
            const response = 'Hello, World!';
            const replySpy = sinon.spy();
            const handler = new HelloHandler() ;
            const result = handler.getHello({}, replySpy);
            expect(replySpy).to.have.been.calledWith(response);
        });
    })
});