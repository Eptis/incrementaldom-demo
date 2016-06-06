//default test config
var defaultConfig = require("./webpack.default.js");
var merge = require('webpack-merge');

var testConfig = merge(defaultConfig, {
  devtool: 'inline-source-map',
});

module.exports = testConfig;
