<script setup>
import {useAuthStore} from "../../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
const role = authStore.user.user.role || '访客'
</script>

<template>
  <el-card shadow="hover" class="mgb12" style="height: 252px">
    <div class="user-info">
      <el-avatar size='large' src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <div class="user-info-cont">
        <div class="user-info-name">{{ name }}</div>
        <div>{{ role }}</div>
      </div>
    </div>
    <div class="user-info-list">
      上次登录时间：
      <span>2024年3月21日</span>
    </div>
    <div class="user-info-list">
      上次登录地点：
      <span>北京</span>
    </div>
  </el-card>
</template>

<style scoped>
.mgb12 {
  margin-bottom: 12px;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}
</style>
