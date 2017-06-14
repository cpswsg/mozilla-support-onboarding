'use strict';

var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var sass      = require('gulp-sass');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var uglify    = require('gulp-uglify');
var concat    = require('gulp-concat');
var imagemin  = require('gulp-imagemin');
var fileinclude = require('gulp-file-include');

var sourcePaths = {
  styles: ['src/sass/**/*.scss'],
  javascripts: ['src/js/**/*.js'],
  images: ['src/images/**/*.{jpg,png,gif,svg}']
};

var distPaths = {
  styles: 'assets/css',
  javascripts: 'assets/js/',
  images: 'assets/images/'
};

var server = {
  host: 'localhost',
  port: '8001'
}


gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'})) //compressed
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('js', function(){
  return gulp.src( sourcePaths.javascripts )
  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest( distPaths.javascripts ))
});

gulp.task('imagemin', function() {
  return gulp.src( sourcePaths.images )
  .pipe(plumber())
  .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest( distPaths.images ));
});

gulp.task('html', function() {
  return gulp.src('./src/html/pages/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: './src/html/includes/'
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('watch', function(){
  gulp.watch('src/html/pages/*.html', ['html']);
  gulp.watch('src/html/includes/*.html', ['html']);
  gulp.watch(sourcePaths.styles, ['sass']);
  gulp.watch(sourcePaths.javascripts, ['js']);
  gulp.watch(sourcePaths.images, ['imagemin']);
});


gulp.task('default', ['sass', 'js', 'imagemin', 'html', 'webserver', 'watch', 'openbrowser']);
