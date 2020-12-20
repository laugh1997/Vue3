<template>
    <div>
        <h3>{{names}}</h3>
        <h5>{{height}}</h5>
    </div>
</template>

<script>
    import {inject,toRefs} from 'vue'
    export default {
        name: "rejects",
        setup() {
            const names = inject('names')
            const cool = inject('cool')
            return {names, ...toRefs(cool)}
        }
    }
</script>

<style scoped>

</style>