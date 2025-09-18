<template>
  <div style="max-width:400px; margin:40px auto">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
      <button type="button" @click="register">Регистрация</button>
    </form>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../lib/api'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

async function login() {
  try {
    const { data } = await api.post('/api/v1/auth/login', { email: email.value, password: password.value })
    localStorage.setItem('api_token', data.api_token)
    router.push('/channels')
  } catch (e) {
    error.value = 'Ошибка входа'
  }
}

async function register() {
  try {
    const { data } = await api.post('/api/v1/auth/register', { email: email.value, password: password.value, password_confirmation: password.value })
    localStorage.setItem('api_token', data.api_token)
    router.push('/channels')
  } catch (e) {
    error.value = 'Ошибка регистрации'
  }
}
</script> 