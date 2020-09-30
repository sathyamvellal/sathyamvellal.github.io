const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("css", function() {
    return gulp.src("./sass/*.scss")
            .pipe(sass({
                outputStyle: "compressed"
            })
            .on("error", sass.logError))
            .pipe(gulp.dest("./source/_static/css/"));
});