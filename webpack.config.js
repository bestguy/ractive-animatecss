'use strict';
let webpack = require('webpack');

module.exports = {
  entry: './src/ractive-animatecss.js',
  output: {
    path: './dist/',
    filename: 'ractive-animatecss.js',
    libraryTarget: 'umd'
  },
  externals: {
    ractive: 'ractive'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(es6|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
};
