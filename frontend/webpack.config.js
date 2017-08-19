import webpack from 'webpack'
import path from 'path'
import environments from 'gulp-environments'

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
