'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './src/';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = this.source + '/js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';
        
        this.scssOutputPath = this.source + '/css';
        this.allScss = this.source + '/sass/**/*.scss';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;