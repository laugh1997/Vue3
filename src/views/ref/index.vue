<template>
    <div>
        <h1>{{infomation}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>

<script>
    import {ref, computed, reactive, toRefs, watchEffect} from 'vue'

    export default {
        name: "watch",
        setup() {
            const info = ref('欢迎来的召唤师峡谷')
            const infomation = computed(() => `小明,${info.value}`)

            const state = reactive({
                name: 'codery',
                age: 20
            })

            setTimeout(() => {
                state.age = 21
            }, 1000)

            const infos = ref(0)
            setTimeout(() => {
                infos.value = 1
            }, 1100)

            setTimeout(() => {
                infos.value = 2
            }, 2000)

            const stop = watchEffect((onInvalidate) => {
                console.log(infos.value)
                onInvalidate(() => {
                    console.log('oninvalisdate')
                })
            })

            setTimeout(() => {
                stop()
            }, 3000)

            setTimeout(() => {
                infos.value = 3
            }, 4000)
            return {
                infomation, ...toRefs(state)
            }
        }
    }
</script>

<style scoped>

</style>