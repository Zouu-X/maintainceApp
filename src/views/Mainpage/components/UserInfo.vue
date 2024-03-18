<script setup>
import {useAuthStore} from "../../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
</script>

<template>

</template>

<style scoped>

</style>
