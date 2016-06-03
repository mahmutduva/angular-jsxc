var gulp = require('gulp');
var minify = require('gulp-minify');
var open = require('gulp-open');

var base = {
  app: 'src/'
}

var paths = {
  jsxc : 'bower_components/jsxc/build/*/*',
  jsxc_directive_dir : 'src/jsxc-chat',
  jsxc_buil_dir: 'src/jsxc-build'

}

gulp.task('copy_jsxc', function () {
  return gulp.src(paths.jsxc)
   .pipe(gulp.dest(paths.jsxc_buil_dir));
})

gulp.task('min', function(){
  return gulp.src('src/jsxc-chat/jsxc-chat.js')
      .pipe(minify({
          ext:{
              min:'.min.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.min.js']
      }))
      .pipe(gulp.dest(paths.jsxc_directive_dir));
});


gulp.task('open', function() {
    gulp.src('src/index.html')
        .pipe(open());
});

gulp.task('default', ['copy_jsxc', 'min']);
