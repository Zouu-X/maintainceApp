<script setup>
import UserInfo from "./components/UserInfo.vue";
import DataInfo from "./components/DataInfo.vue";
import {useAuthStore} from "../../store/Auth.store.js";
const authStore = useAuthStore()
const name = authStore.user.user.username
</script>

<template>
  <el-row>
    <el-col :span="8">
      <user-info />
    </el-col>
    <el-col :span="16">
      <data-info />
    </el-col>


  </el-row>

</template>

<style scoped>

</style>
