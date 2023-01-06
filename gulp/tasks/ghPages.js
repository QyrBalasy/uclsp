import gulp from "gulp";
import ghPages from "gulp-gh-pages";

export const buildGhP = () => {
  return gulp.src("./dist/**/*").pipe(ghPages());
};
