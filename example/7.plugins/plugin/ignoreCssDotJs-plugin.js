

function IgnoreCssDotJs(items) {
  if(!(items instanceof Array)){
    items = [items];
  }
  // Configure your plugin with options...
  this.regexList = items.map(function(it){
    return new RegExp('(^' + it + '(.js)?\\?)|(^' + it + '(.js)?$)', 'i');
  });
}

IgnoreCssDotJs.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('compilation', function(compilation) {
    //这里注册一个类似事件的触发回调方法,该事件(html-webpack-plugin-before-html-generation)是在HtmlWebpackPlugin插件里面触发的
    //Allow plugins to make changes to the assets before invoking the template(HtmlWebpackPlugin插件)
    compilation.plugin('html-webpack-plugin-before-html-generation', function(pluginData, callback) {
      // console.log('handler it');
      var js = pluginData.assets.js.filter(function(it){
        for(var i=0,l=self.regexList.length; i<l; i++){
          //如果匹配就忽略
          if(self.regexList[i].test(it)){
            return false;
          }
        }
        return true;
      });
      pluginData.assets.js = js;
      callback(null, pluginData);
    });
  });

};

module.exports = IgnoreCssDotJs;