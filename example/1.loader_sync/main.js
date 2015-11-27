
//异步加载test1.js,并导入到变量test1
require(["./src/js/test1.js"], function(test1){
    console.log(JSON.stringify(test1));
})

// //加载"./src/js/test1.js"后,执行回调方法(注意:并不执行test1.js的代码)
// require.ensure(["./src/js/test1.js"], function(require) {
//     //这里才执行test1.js的代码
//     var a = require("./src/js/test1.js"); 
//     alert(JSON.stringify(a));
// });

//异步加载test2.js
require([], function(){
  window.test2 = require("./src/js/test2.js");
});

//使用exports-loader引入非AMD规范的js(会执行这个js)
require("exports!./src/js/foo1.js")

//还可以异步引入非AMD规范的js,并且导出这个js里面的FOO全局变量到foo1中
require(["exports?FOO!./src/js/foo2.js"], function(foo2){
    console.log(JSON.stringify(foo2));
})

//在html中添加<style></style>标签,里面的内容就是test1.css的内容
require("style!css!./src/css/test1.css");

//在html中添加<link></link>标签,指向打包后的test2.css文件
require("style/url!file?name=[name].css!./src/css/test2.css");

//在html中添加<style></style>标签,里面的内容就是test3.less编译成css的内容
require("style!css!less!./src/css/test3.less");

//loader是从后向前依次调用的,下面这个例子大概有这几个步骤
//1. 使用less-loader, 解析test4.less
//2. 使用file-loader, 把解析出来内容保存为一个文件, 这个文件你可以自定义名字,默认规则是[hash].[ext], 参见 https://github.com/webpack/file-loader
//3. 使用style-loader, 添加一个<link></link>标签,指向这个文件
require("style/url!file?name=[name].css!less!./src/css/test4.less");





