//default webpack config
var webpack           = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var path              = require('path');

var ROOT_PATH     = path.resolve(__dirname, "../");
var APP_PATH      = path.resolve(ROOT_PATH, 'app');
var STYLES_PATH   = path.resolve(APP_PATH, 'styles');
var BUILD_PATH    = path.resolve(ROOT_PATH, 'build');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var defaultConfig = {
  entry: [APP_PATH],
  output: {
    path: BUILD_PATH,
    filename: 'app.js'

  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    // preLoaders: [
    //   { test: /\.js?$/, loaders: ['eslint'] }
    // ],
    loaders: [
      { test: /\.(sass)$/, loaders: ['style', 'css', 'sass?indentedSyntax'], include: STYLES_PATH, exclude: /node_modules/ },
      { test: /\.(css)$/, loaders: ['style', 'css?sourceMap'], exclude: /node_modules/ },
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({ title: 'Incremental Dom!' }),
    new webpack.HotModuleReplacementPlugin(),
    devFlagPlugin
  ]
};

module.exports = defaultConfig;
