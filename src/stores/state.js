import { defineStore } from 'pinia'
import { reactive, ref, computed } from "@vue/reactivity";


export const useCounterStore = defineStore('counter', () => {
    const count = ref(0) //state
    const name = ref('Eduardo') 
    const doubleCount = computed(() => count.value * 2) //getters
    function increment() { //actions
      count.value++
    }
  
    return { count, name, doubleCount, increment }
  })


  