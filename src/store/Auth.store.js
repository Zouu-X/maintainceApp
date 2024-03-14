import { defineStore } from "pinia";
import axios from "axios";
import {router} from "../router/index.js";
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(loginForm){
      try {
        const res = await axios.post('/login', loginForm)
        console.log(res, 'RES')
        this.user = res.data
        localStorage.setItem('user', JSON.stringify(res.data))
        router.push(this.returnUrl || '/');
      } catch (error) {
          console.log(error)
      }
    }
  }
})
