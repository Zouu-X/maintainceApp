<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useAuthStore } from "../store/Auth.store.js";
import LogoutIcon from '../assets/logout.svg';
import Hamburger from '../assets/hamburger.svg'

const authStore = useAuthStore()


const name = authStore.user.user.username
</script>

<template>
  <div class="nav-bar">
    <div class="left-stuffs">
      <Hamburger />
      <h3>智能运维APP</h3>
<!--      <el-breadcrumb separator="/">-->
<!--        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
<!--      </el-breadcrumb>-->
    </div>
    <div class="right-stuffs">
      <el-dropdown trigger="click">
         <span class="el-dropdown-link">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
             {{ name }}
        <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
      </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click.prevent="authStore.logout()">
              <LogoutIcon />
              Log out
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>


.nav-bar {
  background-color: #213547;
  display: flex;
  align-items: center;
  height: 50px;
  overflow: hidden;
  position: relative;

  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .left-stuffs {
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 4px;
  }
  .right-stuffs {
    margin-left: auto;
  }
  .el-dropdown-link {
    display: flex;
    gap: 4px;
    align-items: center;
    color: white;
  }

}
</style>
