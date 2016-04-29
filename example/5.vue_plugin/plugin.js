(function () {
  var hehe = {
    compiled: function () {
      alert(123);
    }
  }

  var api = {
    aaa: function(){
      alert('aaaaa');
    },
    // mixin: asyncData,
    install: function (Vue, options) {
      vue = Vue
      Vue.options = Vue.util.mergeOptions(Vue.options, hehe)
    }
  }

  if(typeof exports === 'object' && typeof module === 'object') {
    module.exports = api
  } else if(typeof define === 'function' && define.amd) {
    define(function () { return api })
  } else if (typeof window !== 'undefined') {
    window.VueAsyncData = api
  }
})()