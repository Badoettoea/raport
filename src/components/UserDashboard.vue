<template>
  <div>
    <h3>Profil User</h3>
    <input type="file" @change="uploadFoto" />
    <img :src="foto" alt="Foto User" v-if="foto" width="100" />
    <h3>Nilai Raport</h3>
    <ReportCard :nilai="nilai" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReportCard from './ReportCard.vue'

const foto = ref('')
const nilai = ref([
  { mapel: 'Matematika', nilai: 85 },
  { mapel: 'Bahasa Indonesia', nilai: 90 }
])

function uploadFoto(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      foto.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>
