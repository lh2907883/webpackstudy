webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(6)
	window.app = new Vue(__webpack_require__(8));


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(19)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pageA.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pageA.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./pageA.vue"], function () {
	var newOptions = require("-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pageA.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./pageA.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var images = __webpack_require__(10);
	var radios = __webpack_require__(13);
	var textbox = __webpack_require__(16);

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
	            value: 'xxx'
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

/***/ 19:
/***/ function(module, exports) {

	module.exports = "<images :data=\"image_data\"></images>\n    <radios :data=\"radios_data\"></radios>\n    <textbox :data=\"textbox_data\"></textbox>";

/***/ }

});