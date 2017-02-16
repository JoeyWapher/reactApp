/**
 * Created by Administrator on 2017/2/15 0015.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserifygulp= require('gulp-browserify'),
    browserify= require('browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    reactify = require("reactify"),
    source = require("vinyl-source-stream"),
    buffer = require('vinyl-buffer'),
    port = process.env.port || 5000;
// //指定文件输入和输出路径
// var path = {
//     JS: 'dist/js/main.js',
//     HTML: 'index.html',
//     MINIFIED_OUT: 'build.min.js',
//     DEST_SRC: 'dist/js',
//     DEST_BUILD: 'dist/build/',
//     DEST: 'dist'
// };
// gulp.task('build', function(){
//     gulp.src(path.JS)
//         .pipe(concat(path.MINIFIED_OUT))
//         .pipe(uglify(path.MINIFIED_OUT))
//         .pipe(gulp.dest(path.DEST_BUILD));
// });
// gulp.task('serve',['build']);
gulp.task('browserify',function () {
    gulp.src('./app/js/*.js')
        .pipe(browserifygulp({
            transform:[reactify],
        }))
        // // .bundle()
        // .pipe(source('bundle.js')) // gives streaming vinyl file object
        // .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        // .pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('connect',function () {
    connect.server({
        root:'./',
        port:port,
        livereload:true,
    })
});

gulp.task('js',function () {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload())
});

gulp.task('html',function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload())
});

gulp.task('watch',function () {
    gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./app/**/*.html',['js']);
    gulp.watch('./app/js/**/*.js',['browserify']);
});

gulp.task('default',['browserify']);
gulp.task('serve',['browserify','connect','watch']);