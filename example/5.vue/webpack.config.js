var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  //entry的配置不仅仅可以是js
  entry: {
    //把样式打包成一个css文件(有些不需要异步加载的样式,可以这样直接放到页面中引用), 最后生成的style.temp.js其实是个临时文件,没用,请忽略
    'style.temp': ['file?name=[name].css!stylus!./init.stylus'], 
    //页面入口js
    pageA: './pageA.js', 
    pageB: './pageB.js', 
    //vue的公用模块会打包成vueChunk.js(里面包括了各种组件)
    vueChunk: ["./common/initVue.js", "./components/image.vue", "./components/radios.vue", "./components/textbox.vue"],
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
  },
  plugins: [
    // new CommonsChunkPlugin({
    //   name: "cssChunk",
    //   chunks: ["pageA"]
    // }),
    new CommonsChunkPlugin({
      name: "vueChunk",
      //vueChunk.js 是给"pageA", "pageB"引用的
      chunks: ["pageA", "pageB"]
    }),
  ],
  module: {
    loaders: [
      // { test: /\.html$/, loader: "html" },
      // { test: /\.css$/, loader: "css" },
      // { test: /\.stylus$/, loader: "style!css!stylus" },

      { test: /\.vue$/, loader: "vue-loader" },
    ]
  }
}
