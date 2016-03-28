webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1)
	window.app = new Vue(__webpack_require__(3));


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] pageA.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/admin/mycode/webpackstudy/example/6.webpack_build/pageA.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var images = __webpack_require__(5);
	var radios = __webpack_require__(8);
	var textbox = __webpack_require__(11);

	module.exports = {
	    el: "app",
	    data: {
	        image_data: {
	            src: "http://hello.lianaibiji.com/static-boyfriendst/banner1.jpg"
	        },
	        radios_data: {
	            items: [{ text: 'radio1' }, { text: 'radio2' }, { text: 'radio3' }],
	            name: 'radio'
	        },
	        textbox_data: {
	            name: 'textbox',
	            placeholder: '请输入你的名字',
	            value: 'xxxx'
	        }
	    },
	    components: {
	        images: images,
	        radios: radios,
	        textbox: textbox
	    },
	    compiled: function compiled() {},
	    methods: {
	        update: function update() {}
	    }
	};

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports = "\n<images :data=\"image_data\"></images>\n<radios :data=\"radios_data\"></radios>\n<textbox :data=\"textbox_data\"></textbox>\n";

/***/ }

});