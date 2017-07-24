var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var path = require('path');

gulp.task('compress', function() {
  gulp.src('/Users/zack/Desktop/import/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({plugins: [{removeViewBox: true}]})
    ],{
      verbose: true
    }))
    .pipe(gulp.dest('/Users/zack/Desktop/export'));
});
