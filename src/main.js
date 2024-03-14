import { createApp } from 'vue'
import { createPinia } from "pinia";

import { router } from "./router/index.js";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import './Mock/Logservice.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
