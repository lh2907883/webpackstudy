var webpack = require('webpack')

module.exports = {
  entry: {
    'main': ['./main.js']
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
    ]
  }
}
