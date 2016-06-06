//default development config
var webpack       = require('webpack');
var defaultConfig = require("./webpack.default.js");
var merge         = require('webpack-merge');

var devConfig = merge(defaultConfig, {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    host: "172.16.1.29",
  }
});

module.exports = devConfig;
