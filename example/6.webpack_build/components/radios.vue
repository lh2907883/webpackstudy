<template>
    <div class="radios">
        <template v-for="item in data.items">
            <label><input type="radio" name="{{data.name}}">{{item.text}}</label>
        </template>
    </div>
</template>
<script>
module.exports = {
    props: {
        data:{
            type: Object,
            default: function(){
                return {
                    items: [],
                    name: ''
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
