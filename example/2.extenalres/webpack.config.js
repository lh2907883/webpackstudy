var webpack = require('webpack')

module.exports = {
  entry: {
    index: './index.js',    //使用scriptjs打包CDN资源
    index1: './index1.js',    //打包CDN资源
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
  },
  externals: [{
    //可以使用require("jquery")引用jquery模块, 原理就是会生成module.exports = jQuery; 所以页面上必须有<script src=".../jquery.js"></script>
    jquery: 'jQuery' 
  }],
  module: {
    loaders: [

    ]
  }
}