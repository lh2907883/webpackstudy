###webpack 分析
1.使用`webpack --profile --json > stats.json`命令会生成一个json文件,里面记录了webpack打包的详细信息
2.打开http://webpack.github.io/analyse 或者 http://chrisbateman.github.io/webpack-visualizer/ 上传stats.json就可以看到分析结果,这对于项目结构优化很重要
3.参考文章: https://segmentfault.com/a/1190000005054055#articleHeader10