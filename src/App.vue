<template>
  <div>
    <nav style="display:flex; gap:12px; padding:8px; border-bottom:1px solid #ddd">
      <router-link to="/channels">Каналы</router-link>
      <router-link to="/posts">Посты</router-link>
      <a href="#" @click.prevent="logout">Выйти</a>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function logout() {
  localStorage.removeItem('api_token')
  router.push('/login')
}
</script> 