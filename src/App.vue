<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

const route = useRoute();

const showBar = computed(() => route.path !== '/login');
</script>

<template>
  <navbar v-if="showBar" />
  <div class="main">

    <div class="left-side">
      <sidebar v-if="showBar" />
    </div>
    <div class="right-side">
      <router-view />
    </div>
  </div>


</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}
</style>
