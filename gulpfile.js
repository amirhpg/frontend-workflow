const gulp = require('gulp');
const sass = require('gulp-sass');
const haml = require('gulp-haml');

gulp.task('bootstrap-js',()=>{
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
        .pipe(gulp.dest('public/js'))
});

gulp.task('jquery',()=>{
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('public/js'))
})

gulp.task('bootstrap-sass', function(){
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest("public/css/"));
});

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest("public/css"));
});

gulp.task('haml', function(){
    return gulp.src('src/haml/**/*.haml')
    .pipe((haml()))
    .pipe(gulp.dest('public'))
})

gulp.task('watch', function(){
    gulp.watch('node_modules/bootstrap/scss/bootstrap.scss', gulp.series('bootstrap-sass'));
    gulp.watch('src/scss/*.scss',gulp.series('sass'));
    gulp.watch('src/haml/**/*.haml',gulp.series('haml'));
})
