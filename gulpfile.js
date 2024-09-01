const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

// Função assíncrona para lidar com imports dinâmicos
async function loadImagemin() {
  const imagemin = (await import("gulp-imagemin")).default;
  return imagemin;
}

async function loadAutoprefixer() {
  const autoprefixer = (await import("gulp-autoprefixer")).default;
  return autoprefixer;
}

// Caminhos dos arquivos
const paths = {
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js",
  },
  images: {
    src: "src/imgs/*",
    dest: "dist/imgs",
  },
};

// Compilar Sass para CSS
async function styles() {
  const autoprefixer = await loadAutoprefixer();
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minificar JavaScript
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Otimizar Imagens
async function images() {
  const imagemin = await loadImagemin();
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Monitorar mudanças nos arquivos
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// Definir tarefas padrão
const build = gulp.series(gulp.parallel(styles, scripts, images), watch);

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = build;
