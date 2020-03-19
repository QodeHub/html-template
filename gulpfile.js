/*jshint esversion: 6 */

const gulp   = require('gulp');
const uglify = require("gulp-uglify");
const sass   = require("gulp-sass");
const pug    = require("gulp-pug");
const concat = require("gulp-concat");

gulp.task("js", function (cb) {
    return gulp.src([
        'node_modules/jquery/dist/jquery.slim.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
            "src/js/**/*.js"
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"));
});

gulp.task('css', function () {
    return gulp
        .src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './src/scss/**/*.scss'
        ])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('pug', function() {  
    return gulp.src('./src/html/pages/*.pug')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.parallel(['css', 'js', 'pug']));

gulp.task('serve', function() {
    gulp.watch("./src/js/**/*.js", gulp.parallel(['js']));
    gulp.watch("./src/scss/**/*.scss", gulp.parallel(["css"]));
    gulp.watch("./src/html/**/*.pug", gulp.parallel(["pug"]));
});