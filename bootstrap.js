
(function() {
  global.electronApp = {};
  global.electronApp.root = __dirname;
})()

require('babel-register');
require('./app/browser');
