var gulp = require('gulp');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var mysite = 'almasoscuras'
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

gulp.task('styles', function() {
    return gulp.src('./sass/*.scss', {sourcemap: true, style: 'expanded'})
        //Solo activar el minify para el css que subirá a producción
        // .pipe(minifycss())
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(rename('styles.css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('copy', function(){
  gulp.src('./css/styles.css')
    .pipe(gulp.dest('../almasoscuras_real/css/'));
});

gulp.task('scripts_home', function() {
  return gulp.src(['./js/jquery_almas.js', './js/core.js', './js/jquery.fitvids.js', './js/home.js'])
    .pipe(concat('main_home.js'))
    .pipe(gulp.dest('./js'))
    .pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(notify({ message: 'Scripts task home complete' }));
});

gulp.task('scripts_detall', function() {
  return gulp.src(['./js/jquery_almas.js', './js/core.js', './js/jquery.fitvids.js', './js/jquery.lazy.js', './js/detall.js'])
    .pipe(concat('main_detall.js'))
    .pipe(gulp.dest('./js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(notify({ message: 'Scripts task detall complete' }));
});

// BROWSER SYNC =========================================
gulp.task('browsersync', function() {
  browsersync({
        proxy: "http://localhost/almasoscuras/",
        files: [
            'css/*.css',
            'js/*.js',
            '*.html'
        ]
    })
});



// Watch
gulp.task('watch', ['browsersync'], function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('css/**/*.css', ['copy']);
  gulp.watch("*.html").on('change', reload);
});

  // Watch .js files from home
  //gulp.watch('js/**/*.js', ['scripts_home']);

    // Watch .js files from detall
  //gulp.watch('js/**/*.js', ['scripts_detall']);

  // Create LiveReload server
  //livereload.listen();

  // Watch any files in dist/, reload on change
  //gulp.watch('./css/**').on('change', livereload.changed)

  