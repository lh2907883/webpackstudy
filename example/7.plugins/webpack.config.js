var HtmlWebpackPlugin = require('html-webpack-plugin');
var IgnoreCssDotJsPlugin = require('./plugin/ignoreCssDotJs-plugin.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = {
  entry: {
    'init.css': ['./init.stylus'],
    'index': ['./index.js']
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
    new ExtractTextPlugin('./style/[name]'),
    //如果报错'Error: Parameter 'dependency' must be a Dependency',请全局装webpack, npm install -g webpack
    new HtmlWebpackPlugin({
      //只添加index.js, init.css
      chunks: ["index", 'init.css'],
      //通过加hash清除缓存
      hash: true,
      //只针对特定html
      template: './main.html',
      //生成的文件名
      filename: "main.html",
      minify:{    //压缩HTML文件
        removeComments:true,    //移除HTML中的注释
        collapseWhitespace:false    //删除空白符与换行符
      }
    }),
    //如果没有这个插件main.html会插入<script src="init.css.js"></script>,这个js是因为我们设置了init.css作为入口生成的一个空的js,本身没有意义
    //现在可以通过RemoveCssDotJs插件来配置忽略init.css.js的插入
    new IgnoreCssDotJsPlugin('init.css')
  ]
};
module.exports = webpackConfig