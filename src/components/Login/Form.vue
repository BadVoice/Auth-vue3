<template>
  
      <form @submit.prevent="login"  class="flex-col flex gap-5">
        <input v-model="userData.username" placeholder="username" />
        <input v-model="userData.password"  placeholder="password"  type="passowrd" /> 
        <button type="submit" class="w-[50px] bg-gray-200">login</button>
        <RouterLink to="/signup">Signup</RouterLink>
      
      </form>
 
     
      
</template>

<script setup>
import { reactive, computed } from "@vue/reactivity";
import { useUserStore } from '@/stores/state'
import { storeToRefs } from 'pinia'

  
const useStore = useUserStore()

const { signIn } = storeToRefs(useStore)

const userData = reactive({
  username: '',
  password: ''
})

 computed({
  async login(){
      await axios.post('signup', {
        username: userData.username,
        password: userData.password
     });
     console.log(response)

     $router.push('/signup')
     }
 })


</script>

<style lang="scss" scoped>

</style>