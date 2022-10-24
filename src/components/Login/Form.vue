<template>
  
      <form action="" class="flex-col flex gap-5">
        <input placeholder="username" />
        <input placeholder="password"  type="passowrd" /> 
        <button @click.prevent="post" type="submit" class="w-[50px] bg-gray-200">login</button>
        <RouterLink to="/signup">Signup</RouterLink>
      </form>
 
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useCounterStore } from '@/stores/state'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { name, doubleCount } = storeToRefs(store)
    // the increment action can just be extracted
const { increment } = store


const post = () => {
  console.log(name.value)
}
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