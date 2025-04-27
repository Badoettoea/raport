<template>
  <div class="login">
    <h1>Login Raport</h1>
    <input v-model="pin" placeholder="Masukkan PIN" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const pin = ref('')
const router = useRouter()

function login() {
  if (pin.value === '1234') {
    router.push('/user')
  } else if (pin.value === 'admin') {
    router.push('/admin')
  } else {
    alert('PIN Salah!')
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
input, button {
  margin: 10px;
  padding: 10px;
}
</style>
