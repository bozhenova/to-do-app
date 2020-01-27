var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass')


gulp.task('scss', function () {
  return gulp
    .src('source/styles.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', function () {
  return gulp.src('source/*.html').pipe(browserSync.reload({ stream: true }));
});

gulp.task('script', function () {
  return gulp.src('source/*.js').pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: { baseDir: 'source/' },
  });
});

gulp.task('watch', function () {
  gulp.watch('source/*.scss', gulp.parallel('scss'));
  gulp.watch('source/*.html', gulp.parallel('html'));
  gulp.watch('source/*.js', gulp.parallel('script'));
});

gulp.task('default', gulp.parallel('browserSync', 'watch'));
