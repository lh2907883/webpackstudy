<template>
    <images :data="image_data"></images>
    <radios :data="radios_data"></radios>
    <textbox :data="textbox_data"></textbox>
</template>

<script>
var images = require('./components/image.vue');
var radios = require('./components/radios.vue');
var textbox = require('./components/textbox.vue');

module.exports = {
    el: "app",
    data: {
        image_data: {
            src: "http://hello.lianaibiji.com/static-boyfriendst/banner1.jpg"
        },
        radios_data: {
            items: [
                {text: 'radio1'},
                {text: 'radio2'},
                {text: 'radio3'},
            ],
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
    compiled: function(){

    },
    methods: {
        update: function(){

        }
    }
}

</script>

