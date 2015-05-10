var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var outputFold = 'output';

gulp.task('clean', function() {
    return gulp.src('output', {force: true}).pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(['*', '!*.js', '!README.md', '!gulpfile.js', '!node_modules']).
    pipe(gulp.dest(outputFold));
});

gulp.task('minify', ['clean'], function() {
    return gulp.src(['*.js','!gulpfile.js'])
    .pipe(uglify())
    .pipe(gulp.dest(outputFold));
});

gulp.task('release', ['copy', 'minify'], function() {
    gulp.src('output/*').pipe(zip('qrCode.zip')).pipe(gulp.dest('output'));
});