const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const environment = process.env.ENVIRONMENT || 'dev';

const appName = 'compass-backend';

gulp.doneCallback = function (err) {
  process.exit(err ? 1 : 0);
};
