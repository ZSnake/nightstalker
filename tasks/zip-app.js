const gulp = require('gulp');
const zip = require('gulp-zip');
const clean = require('gulp-clean');
const environment = process.env.ENVIRONMENT || 'dev';
const appName = 'compass-backend';

gulp.task('zip-app',['clean-zip'], () => {
  return gulp.src([
			'**/*.*',
      '!node_modules/**/*.*'
    ], {
      base: './'
    })
    .pipe(zip(`${appName}-${environment}.zip`))
    .pipe(gulp.dest('./zip'));
});

gulp.task('clean-zip', function () {
    return gulp.src(['zip/**/*.*'], {read: false})
        .pipe(clean());
});
