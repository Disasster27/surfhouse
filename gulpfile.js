'use strict';

let gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');
	

gulp.task('sass', () => {
	return gulp.src('./style/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
//			cascade: false
		}))
		.pipe(gulp.dest('./build'))
});

gulp.task('watch', () => {
	gulp.watch('./style/**/*.scss', gulp.series('sass'))
});

gulp.task('default', gulp.series(
	gulp.parallel('sass'),
	'watch'
));