<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

const route = useRoute();

const showBar = computed(() => route.path !== '/login');
</script>

<template>
  <navbar v-if="showBar" class="fixed-navbar" />
  <div :class="['main', { 'main-padding': showBar }]">
    <div class="left-side">
      <sidebar v-if="showBar" class="fixed-sidebar" />
    </div>
    <div :class="['content-area', { 'with-margin': showBar }]">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 高 z-index 以确保导航栏在顶层 */
}

.main {
  display: flex;
  flex-direction: row;

}
.main-padding {
  padding-top: 50px; /* 假设导航栏高度为60px，以避免内容被遮挡 */
}

.fixed-sidebar {
  position: fixed;
  top: 50px; /* 假设导航栏高度为60px */
  left: 0;
  //width: 200px; /* 根据实际宽度调整 */
  height: 100%;
  z-index: 1000;
}

.content-area {
  background: #f2f2f2; /* 背景颜色 */
  flex-grow: 1;
  height: 100vh;
}
.with-margin {
  margin-left: 140px; /* 与侧边栏宽度相同，确保内容区不被侧边栏遮挡 */
}
</style>
