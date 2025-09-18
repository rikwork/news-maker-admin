<template>
  <div style="max-width:900px; margin:20px auto">
    <h2>Посты</h2>
    <button @click="reload">Обновить</button>
    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Канал</th>
          <th>Заголовок</th>
          <th>Статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in posts" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.channel_id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.status }}</td>
          <td>
            <button :disabled="p.status === 'published'" @click="publish(p.id)">Опубликовать</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../lib/api'

const posts = ref<any[]>([])

async function reload() {
  const { data } = await api.get('/api/v1/posts')
  posts.value = data
}

async function publish(id: number) {
  await api.post(`/api/v1/posts/${id}/publish`)
  await reload()
}

onMounted(reload)
</script> 