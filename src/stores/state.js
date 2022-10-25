import { defineStore } from 'pinia'
import { reactive, ref, computed } from "@vue/reactivity";
import  axios  from 'axios';
import { onBeforeMount } from 'vue'

export const useUserStore = defineStore('user', () => {

    const state = reactive({
        user:null,
        token: null
    })

    
    
    onBeforeMount(async () => {
        const res = await axios.post('http://127.0.0.1:5174/login', () => {
            })
            .then(res => res.json())
              
       })  
         

    
    // fetchUser(() => {
        // const res = await fetch("http://127.0.0.1:5173/");

        // const user = await res.json();
        // state.user = user;
    //  }) 
        
    // signIn((username, password) => {
    //     const res =  fetch("http://127.0.0.1:5173/login", {
    //         // method: "POST",
    //         // headers: {
    //         //  "Content-Type": "application/json",
    //         // },
    //         // body: JSON.stringify({ username, password }),
    //         // });
    //         // const user = await res.json();
    //         // state.user = user;

        
        
    //  })


  

})
  

    
          
    

    
    
 

  