webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	window.app = new Vue(__webpack_require__(15));


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] pageB.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/admin/mycode/webpackstudy/example/6.webpack_build/pageB.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var images = __webpack_require__(5);
	var textbox = __webpack_require__(11);

	module.exports = {
	    el: "app",
	    data: {
	        image_data: {
	            src: "http://hello.lianaibiji.com/static-boyfriendst/banner2.jpg"
	        },
	        textbox_data: {
	            name: 'textbox',
	            placeholder: '这个是例子',
	            value: ''
	        }
	    },
	    components: {
	        images: images,
	        textbox: textbox
	    },
	    compiled: function compiled() {},
	    methods: {
	        update: function update() {}
	    }
	};

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = "\n<textbox :data=\"textbox_data\"></textbox>\n<images :data=\"image_data\"></images>\n";

/***/ }

});