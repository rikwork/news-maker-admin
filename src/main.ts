import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './views/Login.vue'
import Channels from './views/Channels.vue'
import Posts from './views/Posts.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', redirect: '/channels' },
  { path: '/channels', component: Channels },
  { path: '/posts', component: Posts }
]

const router = createRouter({ history: createWebHistory(), routes })

createApp(App).use(router).mount('#app') 