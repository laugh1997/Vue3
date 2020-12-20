<!--  -->
<template>
<h1 ref="count">iphone</h1>
    <button @click="change">change</button>
</template>

<script>
import {ref} from 'vue'
export default {
components: {},
setup() {
    const count = ref(null)
    const change = () =>{
        count.value.innerText= 'vuejs'
    }
    return {count,change}
}
}
</script>
<style lang='scss' scoped>

</style>