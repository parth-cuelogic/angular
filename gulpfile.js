var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  del = require('del'),
  sass = require('gulp-sass'),
  karma = require('gulp-karma'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  spritesmith = require('gulp.spritesmith'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  ignore = require('gulp-ignore'),
  minify = require('gulp-minify'),
  ngAnnotate = require('browserify-ngannotate');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

var filePath = [
  'node_modules/angular/angular.js',
  'node_modules/angular-ui-router/release/angular-ui-router.min.js',
  'node_modules/angular-ui-router/release/stateEvents.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
  'node_modules/angular-animate/angular-animate.min.js',
  'node_modules/angularjs-toaster/toaster.min.js',
  'node_modules/angularjs-datepicker/src/js/angular-datepicker.js',
  'node_modules/angular-route/angular-route.min.js',
  'app/app.config.js',
  'app/app.js',
  'app/modules/home/home.controller.js',
  'app/modules/profile/profile.controller.js',
  'app/modules/login/login.controller.js',
  'app/modules/register/register.controller.js',
  'app/modules/todo/todo.controller.js',
  'app/js/services/*.js',
  'app/js/directives/*.js',
  'app/js/factories/*.js',
  'app/js/filters/*.js',
]


// cleans the build output
gulp.task('clean', function (cb) {
  del([
    'gulp'
  ], cb);
});


gulp.task('build-js', ['clean'], function () {
  return gulp.src(filePath)
    .pipe(concat('app.js'))
    .pipe(buffer())
    .pipe(cachebust.resources())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./gulp/js/'));
});


gulp.task('build', ['clean', 'build-js'], function () {
  return gulp.src('app/index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('gulp'));
});
