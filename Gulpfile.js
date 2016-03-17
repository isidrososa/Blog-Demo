(function(){
  'use strict';

  var gulp = require('gulp'),
      gls = require('gulp-live-server'),
      sass = require('gulp-sass'),
      server = gls.new('server.js');

  // Develoment web server
  gulp.task('server', function() {
    server.start();
  });

  gulp.task('sass', function () {
    return gulp.src('./app/public/assets/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app/public/assets/css/'));
  });

  gulp.task('sass:watch', function () {
    gulp.watch('./app/public/assets/scss/**/*.scss', ['sass']);
  });

  //	Reload	the	server	on	HTML	changes
  gulp.task('html',	function()	{
	  gulp.src('./app/**/**/*.html')
		  .pipe(server.notify());
  });
  // Reload the server on CSS changes
  gulp.task('css', function() {
    gulp.src('./app/public/assets/css/**/*.css')
      .pipe(server.notify());
  });
  // Reload the server on JS app changes
  gulp.task('js', function() {
    gulp.src('./app/public/**/*.js')
      .pipe(server.notify());
  });

  // Reload the server on JS server changes
  gulp.task('server.js', function() {
    gulp.src('./server.js')
      .pipe(server.notify());
  });

  gulp.task('js-server', function() {
    gulp.src('./server/**/*.js')
      .pipe(server.notify());
  });

  //	Watch	code	changes	and	to	run	related	tasks
  gulp.task('watch',	function()	{
    gulp.watch(['./server.js'], ['server.js']);
    gulp.watch(['./server/**/*.js'], ['js-server']);
	  gulp.watch(['./app/**/*.html'],	['html']);
    gulp.watch(['./app/public/assets/**/*.css'], ['css']);
    gulp.watch(['./app/public/**/*.js'], ['js']);
  });

  gulp.task('default',	['server',	'watch', 'sass:watch']);
})();
