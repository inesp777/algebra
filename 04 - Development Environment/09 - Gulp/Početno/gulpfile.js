var gulp = require('gulp'); 
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var cssnano=require('gulp-cssnano');

gulp.task('uglify', async function(){
   gulp.src('scripts/script.js')
   .pipe(uglify())
   .pipe(gulp.dest('dist'));
})
gulp.task('sass', async function(){
    gulp.src('styles.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
 })

 gulp.task('watch', function () {
    gulp.watch('*.scss', ['sass']);
    gulp.watch('scripts/**/*.js', ['uglify']);
});

gulp.task('default', ['sass','uglify','watch']);

