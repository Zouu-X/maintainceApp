<script setup>
import {useAuthStore} from "../../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
const role = authStore.user.user.role || '访客'
</script>

<template>
  <el-card shadow="hover" class="mgb20" style="height: 252px">
    <div class="user-info">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <div class="user-info-cont">
        <div class="user-info-name">{{ name }}</div>
        <div>{{ role }}</div>
      </div>
    </div>
    <div class="user-info-list">
      上次登录时间：
      <span>2022-10-01</span>
    </div>
    <div class="user-info-list">
      上次登录地点：
      <span>东莞</span>
    </div>
  </el-card>
</template>

<style scoped>

</style>
