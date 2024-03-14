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
  <el-form ref="formRef" :model="loginForm" :rules="rules" >
    <el-form-item label="Username" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>
