<template>
    <div id="app">
        <refs ref="refd"/>
         <button @click="changeName">changeName</button>
         <button @click="sd">sd</button> 
    </div>
    <router-view/>
</template>
<script>
    import refs from './views/refs/refs'
    import {ref,onBeforeUpdate,onUpdated,watchEffect} from 'vue'
    export default {
        components:{
            refs
        },
        setup() {
            const na = ref(0)
            const refd = ref(null)
            const sd = () =>{
                console.log(123)
                na.value++
            }
           onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
            })
            onUpdated(()=>{
                console.log('onUpdated')
            })
            watchEffect(()=>{
                console.log(na.value)
            })
            const changeName = () =>{
                refd.value.change()
            }
            // setTimeout(() => {
            //     na.value++
            //     console.log('name')
            // }, 1000);
            return {refd,changeName,sd}
        }
    }
</script>