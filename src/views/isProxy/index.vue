<template>
    <div>

    </div>
</template>

<script>
    import {reactive,readonly,isProxy,isReactive,isReadonly} from 'vue'
    export default {
        name: "isproxy",
        setup() {
        const state = reactive({
            name:'codery'
        })

        const state1 = readonly({
            name:'vuejs'
        })

         const state2 = readonly(state)
         // const state3 = reactive(state1)
        console.log(isProxy(state),isProxy(state1))
        console.log(isReactive(state),isReactive(state1))
        console.log(isReadonly(state),isReadonly(state1))
        console.log(isReadonly(state2),isReactive(state2))
        }
    }
</script>

<style scoped>

</style>