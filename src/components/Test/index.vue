<!--  -->
<template>
<h1>{{title}}</h1>
<button @click="plus">change</button>
</template>

<script>

export default {
components: {},
props:{
    title:Number
},
emits:['plus'],
setup(props,ctx) {

    const plus = () =>{
        ctx.emit('plus',100)
    }
    return { plus }
}
}
</script>
<style lang='scss' scoped>

</style>