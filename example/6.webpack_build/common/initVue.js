var Vue = require('Vue');
Vue.directive('src', {
    update: function(value){
        if(value != ""){
            this.el.setAttribute('src', value)
        }
    }
})
module.exports = Vue;