var gulp = require("gulp");
var exec = require('child_process').exec;
var sass = require("gulp-sass");

var buildCss = () => {
    return gulp.src("./sass/*.scss")
            .pipe(sass({
                outputStyle: "compressed"
            })
            .on("error", sass.logError))
            .pipe(gulp.dest("./source/_static/css/"));
};

var buildEleventy = () => {
    return exec('eleventy', (err, stdout, stderr) => {
        if (err) {
            throw err;
        }

        console.log(stdout);
        console.error(stderr);
    });
}

exports.buildCss = buildCss;
exports.buildEleventy = buildEleventy;
exports.default = gulp.series(buildCss, buildEleventy);