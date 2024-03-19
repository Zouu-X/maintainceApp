<script setup>
import { ref } from 'vue';
import {CirclePlus, MessageBox, Search, User} from "@element-plus/icons-vue";
import {OrderData} from "../../Data/Order.data.js";
const selected = ref("1")
const input = ref("")
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <div class="container">
    <div class="btn-bar">
      <el-button  :icon="User">我的待办</el-button>
      <el-button  :icon="MessageBox">所有工单</el-button>
    </div>
  </div>
  <div class="container">
    <div class="btn-bar mgb-10">
      <el-button type="primary" :icon="CirclePlus">工单申请</el-button>
      <div class="mt-4">
        <el-input
            v-model="input"
            style="max-width: 600px"
            placeholder="请输入搜索内容"
            class="input-with-select"
        >
          <template #prepend>
            <el-select v-model="selected" style="width: 100px">
              <el-option label="ID" value="1" />
              <el-option label="用户名" value="2" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
    </div>

      <div class="table">
        <el-table :data="OrderData" stripe border style="width: 100%">
          <el-table-column prop="id" label="工单ID" />
          <el-table-column prop="title" label="标题" />
          <el-table-column prop="dealer" label="处理人" width="160" />
          <el-table-column prop="prio" label="优先级">
            <template #default="scope">
              <el-tag :type="scope.row.prio === '1' ? 'danger' : scope.row.prio === '2' ? 'primary' : ''">
                {{ scope.row.prio === '1' ? '紧急' : scope.row.prio === '2' ? '正常' : '' }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="status" label="状态">
            <template #default="scope">
              <el-tag :type="scope.row.status === '1' ? 'success' : scope.row.status === '2' ? 'primary' : ''">
                {{ scope.row.status === '1' ? '进行中' : scope.row.status === '2' ? '已结束' : '' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="creator" label="创建人" />
          <el-table-column prop="create_time" label="创建时间" width="160" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
              >
              <el-button link type="primary" size="small">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>


  </div>

</template>

<style scoped>
.container {
  padding: 30px;
  margin: 10px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn-bar {
  display: flex;
  gap: 8px;
}

.mgb-10 {
  margin-bottom: 10px;
}
</style>

