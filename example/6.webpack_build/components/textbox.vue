<template>
    <input type="text" name="{{data.name}}" value="{{data.value}}" placeHolder="{{data.placeholder}}">
</template>
<script>

module.exports = {
    props: {
        data:{
            type: Object,
            default: function(){
                return {
                    name: '',
                    placeholder: '',
                    value: ''
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
