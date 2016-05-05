/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	//异步加载test1.js,并导入到变量test1
	// require(["./src/js/test1.js"], function(test1){
	//     console.log(JSON.stringify(test1));
	// })

	// //加载"./src/js/test1.js"后,执行回调方法(注意:并不执行test1.js的代码)
	__webpack_require__.e/* nsure */(1, function(require) {
	    window.setTimeout(function(){
	        //这里才执行test1.js的代码
	        var a = __webpack_require__(1); 
	        alert(JSON.stringify(a));
	    }, 3000);
	});

	//异步加载test2.js
	// require([], function(){
	//   window.test2 = require("./src/js/test2.js");
	// });

	// //使用exports-loader引入非AMD规范的js(会执行这个js)
	// require("exports!./src/js/foo1.js")

	// //还可以异步引入非AMD规范的js,并且导出这个js里面的FOO全局变量到foo1中
	// require(["exports?FOO!./src/js/foo2.js"], function(foo2){
	//     console.log(JSON.stringify(foo2));
	// })

	// //在html中添加<style></style>标签,里面的内容就是test1.css的内容
	// require("style!css!./src/css/test1.css");

	// //在html中添加<link></link>标签,指向打包后的test2.css文件
	// require("style/url!file?name=[name].css!./src/css/test2.css");

	// //在html中添加<style></style>标签,里面的内容就是test3.less编译成css的内容
	// require("style!css!less!./src/css/test3.less");

	// //loader是从后向前依次调用的,下面这个例子大概有这几个步骤
	// //1. 使用less-loader, 解析test4.less
	// //2. 使用file-loader, 把解析出来内容保存为一个文件, 这个文件你可以自定义名字,默认规则是[hash].[ext], 参见 https://github.com/webpack/file-loader
	// //3. 使用style-loader, 添加一个<link></link>标签,指向这个文件
	// require("style/url!file?name=[name].css!less!./src/css/test4.less");







/***/ }
/******/ ]);