<template>
  
      <form action="" class="flex-col flex gap-5">
        <input v-model="userData.username" placeholder="username" />
        <input v-model="userData.password"  placeholder="password"  type="passowrd" /> 
        <button @click.prevent="get()" type="submit" class="w-[50px] bg-gray-200">login</button>
        <RouterLink to="/signup">Signup</RouterLink>
        <p>Password more than 6 characters ?  {{store.validateLengthPassword}}</p>
      </form>
 
     
      
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useStore } from '@/stores/state'
import { storeToRefs } from 'pinia'

  
const store = useStore()

const { userData, validateLengthPassword } = storeToRefs(store)
    // the increment action can just be extracted
// const { increment } = store

const get = () => {
  console.log(userData.value)
}

console.log(validateLengthPassword)
  //  const globalState = reactive({
  //   user: null
  // })

  // async function login(username, password) {
  //   try {
  //     globalState.user = await apiLogin(username, password)
  //   } catch (err) {
  //     throw new CredentialError(username, password)
  //   }
  // }

</script>

<style lang="scss" scoped>

</style>