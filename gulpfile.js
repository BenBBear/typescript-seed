var gulp = require('gulp-param')(require('gulp'), process.argv),
    gulpIf = require('gulp-if'),
    ts = require('gulp-typescript'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    wp = require('gulp-webpack'),
    objectAssign = require('object-assign'),
    typedoc = require('gulp-typedoc'),
    sassdoc = require('sassdoc'),
    file = require('gulp-file');

var doc = {
    dir:'./doc/',
    ts: {
        module: "commonjs",
        target: "es5",
        out: "./doc/ts",
        name: "My project title"
    },
    scss: {
        dest: './doc/scss'
    }
}
    
var entry = {
    scss:['./scss/entry.scss'],
    ts:'./ts/entry.ts'
}

var sources = {
    scss:['./scss/**/*.scss'],
    ts:['./ts/**/*.ts']
}

var output = {
    css:'app.css',
    js:'app.js'    
}

var wp_config = {
    module: {
        resolve: {        
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
        },
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    },
    output: {
        filename: output.js,
      }
};


var dist = './public/'

gulp.task('sass',function(done,debug){
     gulp.src(entry.scss)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulpIf(!debug, minifyCss({
            keepSpecialComments: 0
        })))
        .pipe(rename(output.css))
        .pipe(gulp.dest(dist));
        // .on('end', done);
});

gulp.task('watch-ts', function (done) {
    gulp.src(entry.ts)
        .pipe(wp(objectAssign({}, wp_config, {
            watch: true,
            devtool: 'inline-source-map'
        })))
        .pipe(gulp.dest(dist));
})   
gulp.task('ts',function(done,debug){
     gulp.src(entry.ts)
        .pipe(wp(wp_config))
        .pipe(gulpIf(!debug, minifyJs()))
        .pipe(gulp.dest(dist));
})


gulp.task('doc-ts',function(){
    gulp.src(sources.ts)
        .pipe(typedoc(doc.ts));
});

gulp.task('doc-sass',function(){
    gulp.src(sources.scss)
        .pipe(sassdoc(doc.scss));    
});


gulp.task('no-jekyll',function(){
    return file('.nojekyll', "")
    .pipe(gulp.dest(doc.dir));
})


gulp.task('watch-sass',function(){
    gulp.watch(sources.scss, ['sass']);
});
gulp.task('watch',['watch-sass','watch-ts'])

gulp.task('build',['sass','ts']);
gulp.task('doc',['doc-sass','doc-ts','no-jekyll'])
gulp.task('default',['build']);

