var gulp = require('gulp');
var util = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./app/app.js'],
    extentions: ['.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) util.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', util.log.bind(util, 'Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build/js'));
  }

  function cssMinify() {
    return gulp.src('./assets/css/*.css')
      .pipe(minifyCss({compatibility: 'ie8'}))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('./build/css'))
  };

  build()
  cssMinify()
  bundler.on('update', build)
});

gulp.task('compressApp', function() {
  return gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});
