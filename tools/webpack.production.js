//default production config
var webpack           = require('webpack');
var defaultConfig     = require("./webpack.default.js");
var CompressionPlugin = require("compression-webpack-plugin");
var merge             = require('webpack-merge');

var prodConfig = merge(defaultConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$/,
            threshold: 10240,
            minRatio: 0.8
        })
  ]
});

module.exports = prodConfig;
