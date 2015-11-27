var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    index: './index.js', 
    index1: './index1.js', 
    //生成lib公共库,包含了a-b-c,a-b,b-c,a-c的代码
    lib: ["./modules/a-b-c", "./modules/a-b", "./modules/b-c", "./modules/a-c"],
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
  },
  plugins: [
    // new CommonsChunkPlugin({
    //   name: "commons.js",
    //   chunks: ["pageA", "pageB", "admin-commons.js"],
    //   minChunks: 2
    // }),
    new CommonsChunkPlugin({
      //申明这个lib是公共模块
      name: "lib",
      //这个模块是给entry中的index, index1用的..
      //这样做之后index,index.js里面要是引用了./modules/a-b-c模块(这个模块已经打包到了lib中), 就直接调用lib里面的那部分代码(前提是页面要在加载index.js之前先加载lib.js)
      chunks: ["index", "index1"]
    }),
  ],
  module: {
    loaders: [

    ]
  }
}
