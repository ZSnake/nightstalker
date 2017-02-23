const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const babel = require("gulp-babel");
const environment = process.env.ENVIRONMENT || 'dev';
const flow = require('gulp-flowtype');
const mocha = require('gulp-mocha');

const appName = 'compass-backend';

gulp.doneCallback = function (err) {
  process.exit(err ? 1 : 0);
};

gulp.task("build-server", function () {
  return gulp.src("server.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("build-src", function () {
  return gulp.src("app/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/app"));
});
 
gulp.task("build-tests", function () {
  return gulp.src("tests/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/tests"));
});

gulp.task('test', () =>{
    return gulp.src('dist/tests/**/*.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
      }
);

gulp.task("build", ["build-server", "build-src", "build-tests"]);