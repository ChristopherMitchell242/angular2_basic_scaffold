// var gulp = require('gulp');

// var sass = require('gulp-sass'); // sass to css
// var connect = require('gulp-connect'); // local server
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');


// var jsSources = ['scripts/*.js'];
// var sassSources = ['styles/*.scss'];
// var htmlSources = ['**/*.html'];
// var outputDir = 'dist';

// // gulp.task('copy', function() {
// //   gulp.src('index.html')
// //   .pipe(gulp.dest(outputDir))
// // });

// gulp.task('js', function() {
//   gulp.src(jsSources)
//   .pipe(uglify())
//   .pipe(concat('script.js'))
//   .pipe(gulp.dest(outputDir))
//   .pipe(connect.reload())
// });

// gulp.task('connect', function() {
//   connect.server({
//     root: './' + outputDir + '/',
//     livereload: true
//   })
// });

// gulp.task('default', ['copy', 'sass', 'js', 'connect']);