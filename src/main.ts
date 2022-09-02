/*
 * @Description: tyll
 * @Autor: czp
 * @Date: 2022-09-02 16:06:39
 * @LastEditors: czp
 * @LastEditTime: 2022-09-02 17:00:10
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'

const app =createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
