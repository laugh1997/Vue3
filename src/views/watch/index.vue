<template>
    <div>
            <button @click="change">change</button>
            <div ref='divs'></div>
    </div>
</template>

<script>
    import {ref,reactive,watchEffect,onMounted,onUpdated,onBeforeUpdate} from 'vue'

    export default {
        name: "index",
        setup() {
            const state = reactive({
                name:'codey'
            })
            const count = ref(0)
            function getData() {
                return new Promise((resolve)=>{
                    resolve(100)
                })
            }
            setTimeout(() => {
                count.value = 1
            }, 2000);
            onMounted(()=>{
                console.log('OnMounted');
            })
            onUpdated(()=>{
                console.log('Update');
                watchEffect( async ()=>{
                const divs = ref(null)
                let res = await getData()
                console.log('res',res)
                console.log(divs)
                console.log('watchEffect',count.value);
            },{
                flush:'post'
            })
            })
            onBeforeUpdate(() =>{
                console.log('OnBeforeUpdate');
            })
            
            const change = () =>{
                count.value++
                console.log(count.value)
            }
            return {state,change}
        }
    }
</script>

<style scoped>

</style>