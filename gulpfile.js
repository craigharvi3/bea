const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');
const sassLint = require('gulp-sass-lint');
const eslint = require('gulp-eslint');

const core = 'components/**/**/core.scss';

gulp.task('styles:validate:core', () => {
  return gulp.src(core)
    .pipe(sassLint({
      configFile: '.sass-lint-core.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('styles:dist:clean', ['styles:validate:core'], () => {
  return del.sync('dist/');
});

gulp.task('styles:dist:core', ['styles:dist:clean'], () => {
  return gulp.src(['sass/core.scss', core])
    .pipe(concat('core.scss'))
    .pipe(gulp.dest('dist/scss/'));
});

gulp.task('styles:dist:compile', ['styles:dist:core'], () => {
  return gulp.src('dist/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('styles', ['styles:dist:compile'], () => {
  return gulp.src('app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('lint', () => {
  return gulp.src(['components/**/*.{js,jsx}'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', ['styles'], () => {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('components/**/**/*.scss', ['styles']);
  gulp.watch('components/**/**/*.{js,jsx}', ['lint']);
});
