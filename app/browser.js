import configureStore from './configureStore';

const store = configureStore();

require('./browser/window');
require('electron-reload')(__dirname, {
  electron: require('electron-prebuilt')
});
