<template>
    <img alt="" v-src="data.src">
</template>
<script>
module.exports = {
    props: {
        data:{
            type: Object,
            default: function(){
                return {
                    src: '',
                }
            }
        }
    },
    ready: function(){
    },
    methods: {

    }
}
</script>
