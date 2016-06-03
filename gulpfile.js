var gulp = require('gulp');
var minify = require('gulp-minify');
var open = require('gulp-open');
var liveServer = require('gulp-live-server');

var base = {
  app: 'src/'
}

var paths = {
  jsxc_dep : 'bower_components/jsxc/build/lib/jsxc.dep.min.js',
  jsxc_emojine: 'bower_components/jsxc/build/lib/emojione/**',
  jsxc_lib : [
    'bower_components/jsxc/build/**',
    '!bower_components/jsxc/build/lib/**',
    'bower_components/jsxc/build/*.js'
  ],
  jsxc_directive_dir : 'src/jsxc-chat',
  jsxc_build_dir: 'jsxc-build',
  jsxc_build_lib_dir:'jsxc-build/lib/emojione/'

}

gulp.task('copy_jsxc', function () {
  gulp.src(paths.jsxc_lib)
   .pipe(gulp.dest(paths.jsxc_build_dir));

  gulp.src(paths.jsxc_emojine)
    .pipe(gulp.dest(paths.jsxc_build_lib_dir));

  gulp.src(paths.jsxc_dep)
    .pipe(gulp.dest('jsxc-build/lib'));
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


gulp.task('serve',function(){
    var server = liveServer.static('./', 3000);
    server.start(); // port 3000

    gulp.src(base.app)
        .pipe(open({uri: 'http://localhost:3000/'}));
});


gulp.task('default', ['copy_jsxc', 'min', 'serve']);
