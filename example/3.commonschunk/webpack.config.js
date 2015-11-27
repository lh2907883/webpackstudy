var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    index: './index.js', 
    index1: './index1.js', 
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
    // chunkFilename: "[id].[hash].bundle.js"
    // chunkFilename: "[chunkhash].bundle.js"
  },
  plugins: [
    //把所有entry(index.js, index1.js)里面的公共代码的复用部分自动提取输出保存到dist/comLib.js里面, comLib.js文件名自己定 
    new CommonsChunkPlugin('comLib.js')
  ],
  module: {
    loaders: [

    ]
  }
}
