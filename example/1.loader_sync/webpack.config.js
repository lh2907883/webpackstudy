var webpack = require('webpack')

module.exports = {
  entry: {
    main: './main.js',   //基本的打包
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [

    ]
  }
}