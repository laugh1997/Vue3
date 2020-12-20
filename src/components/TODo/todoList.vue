<!--  -->
<template>
    <span>{{list.name}}</span>
    <button @click="change(list.id)">删除</button>
</template>

<script>
import {onUnmounted,onBeforeUnmount} from 'vue'
export default {
components: {},
props:{
    list:{
        type:Object,
        default:() =>{
            return {}
        }
    }
},
emits:['change'],
setup(props,ctx) {
    const change = (id) =>{
        console.log(props)
        ctx.emit('change',id)
    }

    onBeforeUnmount(()=>{
        console.log('onBeforeUnmounted')
    })
    onUnmounted(()=>{
        console.log('onUnmounted')
    })
    return {
        change
    }
}
}
</script>
<style lang='scss' scoped>

</style>