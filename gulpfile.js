const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
 

exports.default = () => (
  gulp.src('styles/style.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('styles'))
);