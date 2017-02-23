'use strict';

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _testMetric = require('../../app/metrics/test-metric');

var _testMetric2 = _interopRequireDefault(_testMetric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_sinonChai2.default);

describe('Test Metric', function () {
  describe('Run metric with no substraction', function () {
    var sandbox = void 0;

    beforeEach(function () {
      sandbox = _sinon2.default.sandbox.create();
    });
    afterEach(function () {
      sandbox.restore();
    });

    var testMetric = new _testMetric2.default();
    var result = testMetric.run(false);
    expect(result).to.equal(0);
  });
});