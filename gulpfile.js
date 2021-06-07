var gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');

gulp.task('styles', () => {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/styles/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});