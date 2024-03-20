import { defineStore } from "pinia";
import axios from "axios";
import {router} from "../router/index.js";
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || {msg: '登出', data: 'false', user: {}},
    returnUrl: null
  }),
  actions: {
    async login(loginForm){
      try {
        const res = await axios.post('/login', loginForm);
        console.log(res.data, 'RES');

        // 检查res.data.data的值
        if(res.data.data === 'false') {
          // 使用alert显示提醒内容
          alert(res.data.msg);
        } else {
          // 原来的逻辑
          this.user = res.data;
          localStorage.setItem('user', JSON.stringify(res.data));
          router.push(this.returnUrl || '/');
        }
      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      this.user = {mes: '登出', data: 'false', user: {}};
      this.returnUrl = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
})
