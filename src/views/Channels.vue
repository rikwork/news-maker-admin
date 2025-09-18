<template>
  <div style="max-width:800px; margin:20px auto">
    <h2>Каналы</h2>
    <form @submit.prevent="create">
      <input v-model="form.name" placeholder="Название" required />
      <input v-model="form.theme" placeholder="Тема (ai, саморазвитие)" />
      <input v-model="form.telegram_chat_id" placeholder="Telegram chat id" />
      <button>Создать</button>
    </form>

    <ul>
      <li v-for="c in channels" :key="c.id">
        <strong>{{ c.name }}</strong> — {{ c.theme }} — chat: {{ c.telegram_chat_id || '—' }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import api from '../lib/api'

const channels = ref<any[]>([])
const form = reactive({ name: '', theme: '', telegram_chat_id: '' })

async function load() {
  const { data } = await api.get('/api/v1/channels')
  channels.value = data
}

async function create() {
  await api.post('/api/v1/channels', { channel: form })
  form.name = ''
  form.theme = ''
  form.telegram_chat_id = ''
  await load()
}

onMounted(load)
</script> 