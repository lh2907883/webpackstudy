<template>
    <textbox :data="textbox_data"></textbox>
    <images :data="image_data"></images>
</template>

<script>
var images = require('./components/image.vue');
var textbox = require('./components/textbox.vue');

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
    compiled: function(){

    },
    methods: {
        update: function(){

        }
    }
}

</script>

