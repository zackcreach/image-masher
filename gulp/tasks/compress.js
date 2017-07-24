var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var path = require('path');

gulp.task('compress', () => {
  gulp.src('/Users/zack/Desktop/import/**/*')
    .pipe(imagemin([
      mozjpeg({
        quality: 85,
        progressive: true
      }),
      pngquant({
        quality: 85,
        speed: 3,
      }),
      imagemin.optipng({
        optimizationLevel: 7
      }),
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.svgo({plugins: [{
        removeViewBox: true,
      }]})
    ],{
      verbose: true
    }))
    .pipe(gulp.dest('/Users/zack/Desktop/export'));
});
