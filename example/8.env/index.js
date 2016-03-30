if(module.hot){
    //热启动模式下,需要手动调用module.hot.accept()来使代码生效
    module.hot.accept();
}

require('./init.stylus');

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!';
document.body.appendChild(h1);