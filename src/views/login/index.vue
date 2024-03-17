<script setup>
import { reactive, ref } from "vue";
import {ElMessage} from "element-plus";
import { useAuthStore } from "../../store/Auth.store.js";

const authStore = useAuthStore()
const loginForm = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [
    { require: true, message: '请输入账户', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在3-10个字符的账户', trigger: 'blur' }
  ],
  password: [
    { require: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '长度在6-15个字符的密码', trigger: 'blur' }
  ],
})
const formRef = ref(null)

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const authStore = useAuthStore()
      authStore.login(loginForm)
    } else {
      ElMessage.error('失败')
      return false
    }
  })
}
const resetForm = () => {
  formRef.value.resetFields();
}
</script>

<template>
  <div class="login-container">
    <h2>Login Page</h2>
    <el-form label-position="top" ref="formRef" :model="loginForm" :rules="rules" class="login-form">
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* 使登录容器高度至少为视口高度 */
  background: #f2f2f2; /* 背景颜色 */
  padding: 20px;
}

.login-form {
  width: 100%; /* 表单宽度 */
  max-width: 400px; /* 最大宽度 */
  box-shadow: 0 2px 12px rgba(0,0,0,0.1); /* 简单的阴影效果 */
  padding: 40px; /* 内部间距 */
  background: #fff; /* 背景颜色 */
  border-radius: 8px; /* 边框圆角 */
}

h2 {
  text-align: center; /* 标题居中 */
  margin-bottom: 20px; /* 标题下的间距 */
}

.el-form-item {
  margin-bottom: 20px; /* 增加表单元素之间的间距 */
}
.el-button {
  margin-right: 10px; /* 按钮之间的间距 */
}



</style>

