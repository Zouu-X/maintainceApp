<script setup>
import Navbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
</script>

<template>
  <div class="container">
    <div class="side-left">
      <sidebar />
    </div>
    <div class="side-right">
      <navbar />
      <h1>TTTT</h1>
    </div>
  </div>
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
