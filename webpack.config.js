var webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': __dirname + '/app/renderer.js'
  },
  output: {
    path: __dirname + '/static',
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  target: 'electron-renderer'
};
