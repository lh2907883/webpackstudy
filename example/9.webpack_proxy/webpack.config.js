var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = {
  entry: {
    'index': ['./index.js']
  },
  output: {
    //这个path一定要是绝对路径,否则proxy跑不起来
    path: __dirname + '/dist/',
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
      { test: /\.vue$/, loader: "vue-loader" },
      { 
        test: /\.stylus$/, 
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader") 
      }
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
      template: './index.html',
      //生成的文件名
      filename: "index.html",
      minify:{    //压缩HTML文件
        removeComments:true,    //移除HTML中的注释
        collapseWhitespace:true    //删除空白符与换行符
      }
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
module.exports = webpackConfig