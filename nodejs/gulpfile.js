var gulp, coffee, concat, stylus, webpack, gutil, paths;
gulp = require('gulp');

concat = require('gulp-concat');
stylus = require('gulp-stylus');
webpack = require('webpack');
gutil   = require('gulp-util');

paths = {};
paths.stylus      = ['source/stylus/main.styl'];
paths.stylusWatch = ['source/stylus/**/*.styl'];
paths.stylusAdmin      = ['source/stylus/admin/index.styl'];
paths.stylusAdminWatch = ['source/stylus/admin/**/*.styl'];
paths.js          = ['source/coffee/**/*.js'];
paths.coffee      = ['source/coffee/**/*.coffee'];
paths.jsx      = ['source/coffee/**/*.jsx'];
paths.webpack = [
  paths.js,
  paths.coffee,
  paths.jsx
];

gulp.task('stylus-admin', function() {
  return gulp.src(paths.stylusAdmin)
      .pipe(stylus())
      .on('error', console.log)
      .pipe(concat('all.css'))
      .pipe(gulp.dest('../basic/web/css/admin'));
});

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .on('error', console.log)
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../basic/web/css'));
});

gulp.task('stylus-min', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus({compress: true}))
    .on('error', console.log)
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('../basic/web/css'));
});

gulp.task("webpack", function (callback) {
  var config = require('./webpack.config');
  webpack(config, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({colors: true}));
    callback();
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.webpack, ['webpack']);
  gulp.watch(paths.stylusWatch, ['stylus']);
  gulp.watch(paths.stylusWatch, ['stylus-min']);
  gulp.watch(paths.stylusAdminWatch, ['stylus-admin']);
});

gulp.task('default', ['stylus', 'stylus-min', 'webpack', 'watch']);