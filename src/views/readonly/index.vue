<!--  -->
<template>
  <div class="">123</div>
</template>

<script>
import { ref, reactive, readonly, isProxy,isReactive,isReadonly,watch,toRaw } from "vue";
export default {
  components: {},
  setup() {
    const state = reactive({
      name: "vuejs",
    });
    const count = ref(0);
    console.log(isReactive(count.value))
    const read = readonly({
      name: "react",
      info: {
        scal: 100,
      },
    });
    console.log(isReadonly(read))
    console.log(isReactive(read))
    console.log(isProxy(read.name));
    const age = readonly({
        state
    })
    console.log(isReadonly(age))
    setTimeout(() => {
        count.value++
    }, 2000);
    const stop = watch(count,()=>{
        console.log(count.value)
    })
    
    setTimeout(() => {
        stop()
    }, 1000);
    const obj = {
        name:'zhangsan'
    }
    const state1 = reactive(obj)
    const newObj = toRaw(state1)
    console.log(state1)
    console.log(newObj)
    console.log(obj === newObj)
    return { state, count, read };
  },
};
</script>
<style lang='scss' scoped>
</style>