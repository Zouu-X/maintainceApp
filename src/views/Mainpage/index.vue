<script setup>
import UserInfo from "./components/UserInfo.vue";
import DataInfo from "./components/DataInfo.vue";
import Todo from "./components/Todo.vue";
import {useAuthStore} from "../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
</script>

<template>

  <el-row>
    <el-col :span="8" style="padding-right: 8px;">
      <user-info />
      <data-info />
    </el-col>
    <el-col :span="16">
      <Todo />
    </el-col>
  </el-row>

</template>

<style scoped>
.el-row {
  margin: 8px;

}
</style>
