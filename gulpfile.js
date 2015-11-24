var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var config = {
		allTs: 'src/app/**/*.ts',
		typings: 'node_modules/**/*.d.ts',
		tsOutputPath: 'build/local'
	};

gulp.task('compile-ts', function() {

	var source = [
		config.allTs,
		config.typings
		];
	
	var tsResult = gulp.src(source)
		.pipe(tsc(tsProject));
		
	return tsResult.js
		.pipe(gulp.dest(config.tsOutputPath));
});