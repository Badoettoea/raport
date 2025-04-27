<template>
  <div>
    <h3>Upload Nilai</h3>
    <input v-model="nama" placeholder="Nama Siswa" />
    <input v-model="mapel" placeholder="Mapel" />
    <input v-model="nilai" placeholder="Nilai" type="number" />
    <button @click="upload">Upload</button>

    <h3>Download Leger</h3>
    <button @click="download">Download CSV</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { uploadNilai } from '@/services/sheetApi'

const nama = ref('')
const mapel = ref('')
const nilai = ref('')

async function upload() {
  await uploadNilai({ nama: nama.value, mapel: mapel.value, nilai: nilai.value })
  alert('Data berhasil diupload')
}

function download() {
  window.open('https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/export?format=csv', '_blank')
}
</script>
