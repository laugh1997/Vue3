<!-- 生命周期 -->
<template>
<div class=''>
    <h1>{{count}}</h1>
    <todoList 
    v-for="(item,index) in state" 
    :key="index"
    :list="item"
    @change="change"/>
</div>
</template>

<script>
import {ref,
watchEffect,
onBeforeMount,
onMounted,
onBeforeUpdate,
onUpdated,
reactive
} from 'vue'
import todoList from '../../components/TODo/todoList'
export default {
components: {todoList},
    setup() {
        const state =reactive([
            {id:1,name:'vuejs'},
            {id:2,name:'react'}
        ])
        const count = ref(0)
        console.log('setup')
        onBeforeMount(()=>{
            console.log('onBeforeMount')
        })
        onMounted(()=>{
            console.log('onMounted');
        })
        setTimeout(() => {
            count.value++
        }, 2000);
        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })
        onUpdated(()=>{
            console.log('onUpdated')
        })
        watchEffect(()=>{
            const a = count.value
            console.log(a)
            console.log('watchEffect')
        },{
            flush:'post'
        })
        const change = (id) =>{
            state.filter(item=>item.id != id)
            console.log(state)
        }
        return {count,state,change}
    }
}
</script>
<style lang='scss' scoped>

</style>