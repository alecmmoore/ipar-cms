var gulp = require('gulp');

//--CSS DEPENDENCIES
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


//--EXTERNAL(NPM) DEPENDENCIES
var bower = require('gulp-bower');
var bowerFiles = require('bower-files');
var inject = require('gulp-inject');
var replace = require('gulp-replace');
var fs = require("fs");

//--OPTIMIZED BUILD DEPENDENCIES
var uglify = require('gulp-uglify');
var clean = require('del');

var jshint = require('gulp-jshint');

//--Config Variables--\\
var config = {
    build_destination: './bin',
    temp_destination: './bin'
};

gulp.task('sass', function () {
    return gulp.src('./src/app/css/**/*.scss')
        .pipe(autoprefixer())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src/app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/app/css/**/*.scss', ['sass']);
});

gulp.task('inject-app', function () {
    var target = gulp.src('./src/app/index.html');

    var sources = gulp.src([
        , './src/app/app.module.js'
        , './src/app/components/**/*.module.js'
        , './src/app/components/**/*.config.js'
        , './src/app/components/**/*.js'
        , './src/app/shell/**/*.js'
        , './src/app/css/*.css'
    ], {read: false});

    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./src/app/'));
});

gulp.task('inject-bower', function () {
    var target = gulp.src('./src/app/index.html');
    return target
        .pipe(inject(gulp.src(bowerFiles({paths: {bowerDirectory: './src/app/bower_components'}}).ext(['js', 'css']).files, {read: false}), {
            name: 'bower',
            relative: true
        }))
        .pipe(gulp.dest('./src/app'));
});
