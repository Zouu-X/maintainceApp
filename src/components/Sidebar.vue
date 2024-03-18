<script setup>
</script>

<template>
  <div class="sidebar-container">
    <el-menu
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        mode="vertical"
        :router="true"
    >
      <el-menu-item index="/">
        <el-icon>
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">首页</span>
      </el-menu-item>
      <el-menu-item index="/work-form">
        <el-icon>
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">工单管理</span>
      </el-menu-item>
      <el-menu-item index="/equipment">
        <el-icon>
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">设备管理</span>
      </el-menu-item>
      <el-menu-item index="/line">
        <el-icon>
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">产线管理</span>
      </el-menu-item>
      <el-menu-item index="/items">
        <el-icon>
          <Edit />
        </el-icon>
        <span slot="title" class="menu-font">物料管理</span>
      </el-menu-item>
      <el-menu-item index="/personal">
        <el-icon>
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
  .el-menu {
    width: 140px;
  }
}

.menu-font {
  font-weight: bold;
  font-size: 16px;
}
</style>
