var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {

  entry: {
    'style.temp': ['file?name=[name].css!stylus!./init.stylus'], 
        'style.temp': ['file?name=[name].css!stylus!./init.stylus'], 
    pageA: './pageA.js', 
    pageB: './pageB.js', 
    //在模块中加入webpack/hot/dev-server
    //然后build, 运行webpack-dev-server --content-base ./ --port 9966
    //然后打开http://localhost:9966/webpack-dev-server/pageA.html
    //现在在改动pageA.vue的代码会发现页面是时时刷新,并且是增量编译(只会编译你改动的那块代码)
    vueChunk: ['webpack/hot/dev-server', "./common/initVue.js", "./components/image.vue", "./components/radios.vue", "./components/textbox.vue"],
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "vueChunk",
      chunks: ["pageA", "pageB"]
    }),
  ],
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
    ]
  }
}
