var gulp = require("gulp");
var exec = require('child_process').exec;
var _sass = require("gulp-sass");

var sass = () => {
    return gulp.src("./sass/*.scss")
            .pipe(_sass({
                outputStyle: "compressed"
            })
            .on("error", _sass.logError))
            .pipe(gulp.dest("./source/_static/css/"));
};

var eleventy = () => {
    return exec('eleventy', (err, stdout, stderr) => {
        if (err) {
            throw err;
        }

        console.log(stdout);
        console.error(stderr);
    });
}

exports.sass = sass;
exports.eleventy = eleventy;
exports.default = gulp.series(sass, eleventy);