<!--  -->
<template>
  <div class="">
    <!-- <Test :title="state" @plus='plus'/>  -->
    <button @click="debounce">change</button>
    <input type="file" name='img' multiple="multiple">
  </div>
</template>

<script>
import { reactive,shallowRef,watchEffect,computed,readonly,getCurrentInstance } from "vue";
// import Test from '../../components/Test/index'
export default {
  // components: {Test},
  setup() {
    const state = reactive({
        name:'codery',
        age:20
    });
    const {ctx} = getCurrentInstance()
    const {utils} =  ctx
    console.log(utils.add(1,2))
    const refVal = shallowRef({
        get() {
            return state.name
        },
        set(value) {
                state.name = value
        }
        })
    
   const cpmd = computed({
       get() {
           return state.name
       },
       set(value) {
           console.log(value);
           state.name = value
       }
   })

    console.log(cpmd.value = '王五');
    watchEffect(()=>{   
         refVal.value.name = '李四'
        console.log(refVal.value.name)
    })

    // const shallowRef = shallowRef({
    //     name:'vue'
    // })  
    // triggerRef(shallowRef)  
    // console.log(shallowRef);

    const red = readonly(state)
    red.name = '马六'
    console.log(state);

    const t = setTimeout(() => {
        console.log('settimeout')
    }, 2000);
    console.log('t',t)

    const debounce = () =>{
        let timer = null
        if(timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            console.log('防抖函数')
        },1500)
    }
    return {state,refVal,debounce};
  },
};
</script>
<style lang='scss' scoped>
</style>