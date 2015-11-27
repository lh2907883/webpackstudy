webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(6)
	window.app = new Vue(__webpack_require__(20));


/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(22)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pageB.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pageB.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./pageB.vue"], function () {
	var newOptions = require("-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pageB.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./pageB.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var images = __webpack_require__(10);
	var textbox = __webpack_require__(16);

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

/***/ 22:
/***/ function(module, exports) {

	module.exports = "<textbox :data=\"textbox_data\"></textbox>\n    <images :data=\"image_data\"></images>";

/***/ }

});