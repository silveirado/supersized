var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function (cb) {
  pump([
        gulp.src('core/js/supersized.js'),
				sourcemaps.init({loadMaps: true}),
        uglify(),
				rename({ suffix: '.min' }),
				sourcemaps.write(),
        gulp.dest('dist/'),
				gulp.src('core/css/supersized.core.css'),
				sourcemaps.init({loadMaps: true}),
				cssmin(),
				rename({ suffix: '.min' }),
				sourcemaps.write(),
        gulp.dest('dist/'),
				gulp.src('core/img/*'),
				gulp.dest('dist/img')
    ],
    cb
  );
});
