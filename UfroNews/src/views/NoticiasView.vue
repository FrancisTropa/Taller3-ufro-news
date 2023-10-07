<template>
  <div class="card-container">
    <Noticias v-for="n in noticias" :key="n._id" :newsId="n.newsId" :titulo="n.title" :img="n.imageUrl" :source="n.source"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import Noticias from '../components/Noticias.vue'

const noticias = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news/`);
    noticias.value = response.data.news;
  } catch (error) {
    console.log(error)
    console.log('Error ;(')
  }
});
</script>

<style scoped>
.card-container {
  width: 100%;
  margin-top: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: space-around;
}
</style>