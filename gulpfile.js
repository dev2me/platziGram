var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var preset =  require('babel-preset-es2015');
var source = require('vinyl-source-stream');


gulp.task('styles', function() {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('assets', function() {
  gulp.src('./assets/*')
      .pipe(gulp.dest('public'));
});

gulp.task('scripts', function() {
  browerify('./src/index.js')
  .transform(babel, preset)
  .bundle()
  .pipe(source('index.js'))
})

gulp.task('default', ['assets','styles', 'scripts']);


