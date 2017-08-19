// Let's import our dependencies
import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import environments from 'gulp-environments'
import chalk from 'chalk'
import fs from 'fs'
import browserSync from 'browser-sync'
import concat from 'gulp-concat'
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import plumber from 'gulp-plumber'
import cssnano from 'gulp-cssnano'
import jsonlint from 'gulp-jsonlint'
import del from 'del'
import standard from 'gulp-standard'
import stylus from 'gulp-stylus'
import jeet from 'jeet'
import rupture from 'rupture'
import csso from 'gulp-csso'
import runSequence from 'run-sequence'
import uglify from 'gulp-uglify'
import cmq from 'gulp-merge-media-queries'
import path from 'path'
import webpack from 'webpack-stream'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Let's get some variables set up for later
let bundler = webpack(webpackSettings)

// Let's specify our folders
let pkg = {
  src: 'src',
  dist: 'dist',
  components: 'components',
  styles: 'css',
  scripts: 'js',
  images: 'images',
  vendors: 'vendors',
  fonts: 'fonts'
}

// Here is our webpack configuration
let webpackSettings = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.join(process.cwd(), pkg.src.js, 'app.jsx')
    ]
  },
  output: {
    path: path.join(process.cwd(), pkg.build.js),
    publicPath: '/js/',
    filename: '[name].js'
  },
  plugins: environments.production() ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  },
  debug: environments.development(),
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /(node_modules|bower_components)/,
      include: [path.join(process.cwd(), pkg.src.js)],
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015', 'webpack-module-hot-accept']
    }]
  }
}

// Here are our gulp tasks

gulp.task('dev', function (callback) {
  browserSync({
    server: {
      baseDir: [ pkg.paths.build ],
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackSettings.output.publicPath,
          stats: { colors: true }
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    files: [
      pkg.build.css + '**/*.css',
      pkg.paths.build + '**/*.html'
    ]
  })
})
