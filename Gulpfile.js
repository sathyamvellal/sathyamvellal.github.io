var gulp = require("gulp");
var exec = require('child_process').exec;
var _sass = require("gulp-sass")(require('node-sass'));
var _del = require('del');
var watch = require('gulp-watch');

var clean = () => {
    return _del(["_site/**"]);
};

var sass = () => {
    return gulp.src("./sass/*.scss")
            .pipe(_sass({
                outputStyle: "compressed"
            })
            .on("error", _sass.logError))
            .pipe(gulp.dest("./source/_static/css/"));
};

var eleventy = () => {
    return exec('npx eleventy', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            throw err;
        }

        console.log(stdout);
        console.error(stderr);
    });
}

var watch = () => {
    var glob = [
        'sass/*.scss',
        'source/**/*.md'
    ];

    return watch(glob, () => {
        
    });
}

exports.clean = clean;
exports.sass = sass;
exports.eleventy = eleventy;
exports.watch = watch;
exports.default = gulp.series(clean, sass, eleventy);