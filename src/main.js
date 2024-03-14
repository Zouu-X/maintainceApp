import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import router from "./router/index.js";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import './Mock/Logservice.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
