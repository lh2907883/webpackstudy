var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = {
  entry: {
    'index': './index.js',
    'index1': './index1.js'
  },
  output: {
    path: 'dist',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          //babel6.0以后,使用es6和react的配置
          presets: ['es2015']
        }
      },
      { test: /\.stylus$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader") }
    ]
  },
  plugins: [
    //样式生成在style文件夹下
    new ExtractTextPlugin('./style/[name].css'),
    //如果报错'Error: Parameter 'dependency' must be a Dependency',请全局装webpack, npm install -g webpack
    new HtmlWebpackPlugin({
      //只添加index.js
      chunks: ["index"],
      //通过加hash清除缓存
      hash: true,
      //只针对特定html
      template: './main.html',
      //生成的文件名
      filename: "main.html"
    })
  ]
};
module.exports = webpackConfig