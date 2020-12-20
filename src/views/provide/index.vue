<template>
    <div>
        <inject></inject>
        <button @click="change">change</button>
    </div>
</template>
<script>
    import inject from './injects'
    import {provide,ref,reactive} from 'vue'
    export default {
        name: "provide",
        components:{
            inject
        },
        setup() {
           
            const count = ref(0)
            const state = reactive({
                name:'codey',
                height:182
            })
            provide('names', count)
            provide('cool',state)
            
            const change = ()=>{
                count.value++
            }
            return {change}
        }
    }
</script>

<style scoped>

</style>