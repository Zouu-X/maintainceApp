<script setup>
</script>

<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>

</template>

<style scoped>
#app {
  display: flex;
}

.sidebar {
  /* 侧边栏样式 */
}

.content {
  flex-grow: 1;
  /* 内容区样式 */
}
</style>
