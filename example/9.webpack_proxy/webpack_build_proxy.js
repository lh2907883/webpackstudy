var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js');

// config.output.path = path.join(process.cwd(), 'static')
// config.output.publicPath = this.config._publicPath
// config.output.chunkfilename =  'hehe/[name].[id].js'
// config.output.filename = 'hehe/[name].js'

var hotMiddlewareScript = "webpack-dev-server/client?http://0.0.0.0:" + ("8883")
// don't reload
// var hot = "webpack/hot/only-dev-server"
var hot = "webpack/hot/dev-server"
for(var entry in config.entry){
    if(config.entry.hasOwnProperty(entry)){
        config.entry[entry].unshift(hotMiddlewareScript)
        config.entry[entry].unshift(hot)
    }
}
var compiler = webpack(config);
// compiler.run(function(){

// });
var server = new WebpackDevServer(compiler, {
    hot: false,
    historyApiFallback: false,
    publicPath: '',
    proxy: {
        //遇到/mall/*的请求,代理给http://192.168.1.59:7171/mall/*
        "/mall/*": "http://192.168.1.59:7171/"
    }
})
server.listen(8883, "0.0.0.0", function(err, stat) {
    if(!!err){
        console.log(err)
    }
    else if(!!stat){
        console.log(stat)
    }
});