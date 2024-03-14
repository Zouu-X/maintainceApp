<script setup>
function goToPage(path) {
  if (this.$route.path !== path) {
    router.push(path)
  }
}
</script>

<template>
  <div class="sidebar-container">

    <el-menu
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        mode="vertical"
    >
      <el-menu-item @click="goToPage('/main')" index="1">
        <el-icon :size="size" :color="color">
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">工单管理</span>
      </el-menu-item>
      <el-menu-item @click="goToPage('/one')" index="2">
        <el-icon :size="size" :color="color">
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">设备管理</span>
      </el-menu-item>
      <el-menu-item @click="goToPage('/two')" index="3">
        <el-icon :size="size" :color="color">
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">产线管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon :size="size" :color="color">
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">物料管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon :size="size" :color="color">
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">人员管理</span>
      </el-menu-item>
      <!--        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />-->
    </el-menu>
  </div>
</template>

<style scoped>
.sidebar-container {
  display: flex;
  height: 100vh;
}

.menu-font {
  font-weight: bold;
  font-size: 16px;
}
</style>
