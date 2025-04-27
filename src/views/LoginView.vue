<template>
  <div class="login">
    <h1>Login Rapor</h1>
    <input v-model="pin" placeholder="Masukkan PIN" />
    <button @click="login">Login</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getUserData } from '@/services/sheetApi'

const router = useRouter()
const pin = ref('')
const error = ref('')

async function login() {
  const users = await getUserData(pin.value)
  if (users.length > 0) {
    const user = users[0]
    if (user.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/user')
    }
  } else {
    error.value = 'PIN salah!'
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 100px;
}
</style>
