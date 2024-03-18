<script setup>
import { reactive } from 'vue';
const todoList = reactive([
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要写100行代码加几个bug吧',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: true
  },
  {
    title: '今天要写100行代码加几个bug吧',
    status: true
  }
]);
</script>

<template>
  <el-card shadow="hover" style="height: 403px">
    <template #header>
      <div class="clearfix">
        <span>待办事项</span>
        <el-button style="float: right; padding: 3px 0" text>添加</el-button>
      </div>
    </template>

    <el-table :show-header="false" :data="todoList" style="width: 100%">
      <el-table-column width="40">
        <template #default="scope">
          <el-checkbox v-model="scope.row.status"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <div
              class="todo-item"
              :class="{
										'todo-item-del': scope.row.status
									}"
          >
            {{ scope.row.title }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped>
.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>
