var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task('gulp-buil', function () {
    console.log('Building...');
});

gulp.task('gulp-hello', function () {
    console.log('Hello, world!');
});

gulp.task('styles', function() {
    gulp.src("styles/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'))
});