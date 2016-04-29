// if(module.hot){
//     //热启动模式下,需要手动调用module.hot.accept()来使代码生效
//     module.hot.accept();
// }

require('./style/init.stylus');

window.app = new Vue(require('./app.vue'));

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!';
document.body.appendChild(h1);

$.ajax({
    url : '/mall/showoff/list/?codename=avatar&t=' + new Date(),
    type : 'GET',
    success : function(params) {
        if(params.ret == 0){
            alert(JSON.stringify(params))
        }
    }.bind(this),
    error : function(e) {
    }
});