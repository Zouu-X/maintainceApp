<script setup>
import { useAuthStore } from "../store/Auth.store.js";
const authStore = useAuthStore()


const name = authStore.user.user.username
</script>

<template>
  <div class="nav-bar">
    <div class="left-stuffs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-stuffs">
      <el-dropdown trigger="click">
         <span class="el-dropdown-link">
          {{ name }}
<!--           替换成头像-->
        <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
      </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-arrow-left" @click.prevent="authStore.logout()">Log out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  margin-left: 8px;
  display: flex;
  align-items: center;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .left-stuffs {
    padding-left: 4px;
  }
  .right-stuffs {
    margin-left: auto;
  }
}
</style>
