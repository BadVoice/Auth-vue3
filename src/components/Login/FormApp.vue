<template>
    <div class="flex flex-col w-[500px] m-auto gap-5 mt-[100px]">
        <h1>{{$route.name}}</h1>
        <Form />
        <FormList />
    </div>
</template>

<script setup>
import Form from '@/components/Login/Form.vue';
import FormList from '@/components/Login/FormList.vue';



</script>

<style lang="scss" scoped>

</style>