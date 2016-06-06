var TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var devConfig = require('./tools/webpack.development.js');
var prodConfig = require('./tools/webpack.production.js');

if (TARGET === 'start' || TARGET === 'start-dev' || !TARGET) {
  module.exports = devConfig;
}else{
  module.exports = prodConfig;
}




