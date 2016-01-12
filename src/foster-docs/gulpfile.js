/// <binding BeforeBuild='clean' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    tslint = require("gulp-tslint"),
    sourcemaps = require("gulp-sourcemaps"),
    inject = require("gulp-inject"),
    tsc = require("gulp-typescript"),
    del = require("del");

var tsProject = tsc.createProject('tsconfig.json');

var paths = {
    webroot: "./wwwroot/",
};

paths.src = paths.webroot + "src/";
paths.app = paths.src + "app/";
paths.tsDest = paths.src + "js/";
paths.ts = paths.app + "**/*.ts";
paths.cssDest = paths.src + "css/";
paths.sass = paths.src + "sass/**/*.scss";

paths.typings = "./typings/";
paths.libTsd = "./tools/typings/**/*.ts";
paths.appTsd = paths.typings + "app.d.ts";

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

// A task that uses the rimraf Node deletion module to remove the minified version of the site.js file.
gulp.task("clean:js", function(cb) {
    rimraf(paths.concatJsDest, cb);
});

// A task that uses the rimraf Node deletion module to remove the minified version of the site.css file.
gulp.task("clean:css", function(cb) {
    rimraf(paths.concatCssDest, cb);
});

// A task that calls the clean:js task, followed by the clean:css task.
gulp.task("clean", ["clean:js", "clean:css"]);

// A task that minifies and concatenates all .js files within the js folder. The .min.js files are excluded.
gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
            .pipe(concat(paths.concatJsDest))
            .pipe(uglify())
            .pipe(gulp.dest("."));
});

// A task that minifies and concatenates all .css files within the css folder. The .min.css files are excluded.
gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
            .pipe(concat(paths.concatCssDest))
            .pipe(cssmin())
            .pipe(gulp.dest("."));
});

// A task that calls the min:js task, followed by the min:css task.
gulp.task("min", ["min:js", "min:css"]);


/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
gulp.task("gen-ts-refs", function () {
    var target = gulp.src(paths.libTsd);
    var sources = gulp.src([paths.ts], {read: false});
    return target.pipe(inject(sources, {
        starttag: "//{",
        endtag: "//}",
        transform: function (filepath) {
            return '/// <reference path="..' + filepath + '" />';
        }
    })).pipe(gulp.dest(paths.typings));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(paths.ts).pipe(tslint()).pipe(tslint.report("prose"));
});

/**
 * Compile TypeScript and include references to library and app.d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [paths.ts,                //path to typescript files
                         paths.libTsd]; //reference to library .d.ts files
                        

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(paths.tsDest));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(paths.tsDest));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
  var typeScriptGenFiles = [
                              paths.tsDest +'/**/*.js',    // path to all JS files auto gen'd by editor
                              paths.tsDest +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
                              '!' + paths.tsDest + '/lib'
                           ];

  // delete the files
  del(typeScriptGenFiles, cb);
});

/**
 * Compile Scss
 */
gulp.task('compile-sass', function() {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.cssDest));
});

gulp.task('watch', function() {
    gulp.watch([paths.ts], ['ts-lint', 'compile-ts']);
    gulp.watch([paths.sass], ['compile-sass'])
});

//gulp.task('serve', ['compile-ts', 'compile-sass', 'watch'], function() {
//    process.stdout.write('Copying libraries...\n');
//    gulp.src([
//        'node_modules/es6-shim/es6-shim.js',
//		'node_modules/systemjs/dist/system.src.js',
//		'node_modules/angular2/bundles/angular2.dev.js'
//    ])
//    .pipe(gulp.dest('src/lib/'));
    
//    process.stdout.write('Starting browserSync and superstatic...\n');
//    browserSync({
//        port: 3000,
//        files: ['index.html', '**/*.js'],
//        injectChanges: true,
//        logFileChanges: false,
//        logLevel: 'silent',
//        logPrefix: 'foster-docs',
//        notify: true,
//        reloadDelay: 0,
//        server: {
//        baseDir: './src',
//        middleware: superstatic({ debug: false})
//        }
//    });
//});

gulp.task('default', ['ts-lint', 'gen-ts-refs', 'compile-ts', 'compile-sass']);