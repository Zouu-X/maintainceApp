<script setup>
import Navbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import {useAuthStore} from "../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
</script>

<template>
  <h1>Hi {{ name }}</h1>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;

}
.side-right {
  flex-grow: 1;
}
</style>
