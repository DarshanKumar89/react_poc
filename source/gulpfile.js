var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var mincss = require('gulp-minify-css');
var fileinclude = require('gulp-file-include');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');



/*LOCALHOST*/
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: '../build/',
    });
});



/*HTML*/
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(gulp.dest('../build/'))
        .pipe(connect.reload());
});


/*FONTS*/
gulp.task('fonts', function() {
    gulp.src('fonts/*.*')
        .pipe(gulp.dest('../build/fonts/'))
        .pipe(connect.reload());
});



/*IMAGES*/
gulp.task('images', function() {
    gulp.src('images/*.*')
        .pipe(gulp.dest('../build/images/'))
        .pipe(connect.reload());
});

/*SASS*/
gulp.task('sass', function() {
    gulp.src('styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(mincss())
        .pipe(sourcemaps.write('maps/'))        
        .pipe(gulp.dest('../build/styles/'))
        .pipe(connect.reload()); 
});


/*UGLIFY*/
// gulp.task('js', function() {
//     return gulp.src('scripts/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(concat('all.js'))
//         // .pipe(uglify())
//         .pipe(gulp.dest('../build/scripts/'))
//         .pipe(notify({
//             message: 'Finished minifying JavaScript'
//         }))
//         .pipe(connect.reload());
// });


/*BROWSERFIY*/
gulp.task('js', function() {
return browserify('components/main.js')
 .transform(reactify)
.bundle()
.pipe(source('bundle.js'))
.pipe(gulp.dest('../build/scripts/'))
.pipe(connect.reload());
});
 


/*WATCH*/
gulp.task('watch', function() {
    gulp.watch('*.html', ['html']);
    gulp.watch('fonts/*.*', ['fonts']);
    gulp.watch('images/*.*', ['images']);
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('components/**/*.js', ['js']);
});


gulp.task('default', ['webserver', 'watch']);