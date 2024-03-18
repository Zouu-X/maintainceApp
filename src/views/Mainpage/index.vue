<script setup>

import {useAuthStore} from "../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
</script>

<template>
  <h1>Hi {{ name }}</h1>
</template>

<style scoped>

</style>
