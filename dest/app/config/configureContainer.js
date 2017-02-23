'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureContainer = undefined;

var _awilix = require('awilix');

var _metric = require('../metrics/metric');

var _metric2 = _interopRequireDefault(_metric);

var _testMetric = require('../metrics/test-metric');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureContainer = exports.configureContainer = function configureContainer() {
    var container = (0, _awilix.createContainer)();
    container.registerClass(_testMetric.TestMetric);
};