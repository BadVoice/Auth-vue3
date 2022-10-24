import { defineStore } from 'pinia'
import { reactive, ref, computed } from "@vue/reactivity";


export const useStore = defineStore('store', () => {
    const userData = reactive({
        username: '',
        password: ''
    })
    
    const validateLengthPassword = computed(() => {
        if(userData.password == 0) {
            return '-'
        }
        else {
          return userData.password.length > 6 ? 'yes' : 'No';
        }

        
    })
  
  
    return { userData, validateLengthPassword }
  })


  