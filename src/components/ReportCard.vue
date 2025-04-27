<template>
  <div>
    <div v-for="n in nilai" :key="n.mapel" class="card">
      <h4>{{ n.mapel }}</h4>
      <p>Nilai: {{ n.nilai }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['nilai'])
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
}
</style>
