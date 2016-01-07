var gulp = require('gulp');
var connect = require('gulp-connect');
var plugins = require('gulp-load-plugins')();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var del = require('del');
eslint = require('gulp-eslint');

// set variwebpack: bundle is now VALID.able via $ gulp --type production
var environment = plugins.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js');

var port = plugins.util.env.port || 9000;
var src = 'src/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('components', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(isProduction ? plugins.uglifyjs() : plugins.util.noop())
    .pipe(gulp.dest(dist))
    .pipe(plugins.size({ title : 'js' }))
    .pipe(plugins.connect.reload());
});

  /*FONTS*/
  gulp.task('fonts', function() { 
    gulp.src(src + 'fonts/*.*')
      .pipe(gulp.dest(dist + 'fonts/bootstrap/'))
      .pipe(connect.reload());
  });



  /*IMAGES*/
  gulp.task('images', function() {
    gulp.src(src + 'images/*.*')
      .pipe(gulp.dest(dist + 'images/'))
      .pipe(connect.reload());
  });

  /*SASS*/
  gulp.task('sass', function() {
    gulp.src(src + 'styles/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      // .pipe(mincss())
      .pipe(sourcemaps.write('maps/'))        
      .pipe(gulp.dest(dist + 'styles/'))
      .pipe(connect.reload()); 
  });

  // ESLint
  gulp.task('lint', function () {
    return gulp.src([src + 'scripts/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  });

  // copy html from src to dist
  gulp.task('html', function() {
    return gulp.src(src + 'index.html')
      .pipe(gulp.dest(dist))
      .pipe(plugins.size({ title : 'html' }))
      .pipe(plugins.connect.reload());
  });

// add live-reload on the given port
gulp.task('serve', function() {
  plugins.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    }
  });
});

gulp.task('resources', function(cb) {
  return gulp.src(src + 'resources/**/*')
    .pipe(plugins.size({ title : 'resources' }))
    .pipe(gulp.dest(dist + 'resources'));
});

gulp.task('clean', function(cb) {
  return del([dist], cb);
});

gulp.task('watch', function() {
  gulp.watch(src + 'fonts/**/*.*', ['fonts']);
  gulp.watch(src + 'images/*.*', ['images']);
  gulp.watch(src + 'styles/**/*.scss', ['sass']);
  gulp.watch(src + 'index.html', ['html']);
  gulp.watch(src + 'scripts/**/*.js', ['components']);
  gulp.watch(src + 'main.js', ['components']);
});

// by default build project and then watch files in order to trigger live-reload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  return gulp.start('fonts', 'images', 'sass', 'html', 'components', 'resources');
});