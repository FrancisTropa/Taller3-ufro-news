<template>
    <NoticiaDetallada :noticia="noticia" v-if="noticia"/>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  import NoticiaDetallada from '../components/NoticiaDetallada.vue';
  
  const noticia = ref({});
  const route = useRoute();
  
  onMounted(async () => {
    const newsId = route.params.newsId;
    try {
      const response = await axios.get(`http://3.138.52.135:3000/news/${newsId}`);
      noticia.value = response.data.news;
    } catch (error) {
      console.log(error)
      console.log('Error ;(')
    }
  });
  </script>
  
  <style scoped>
  .news-container {
    width: 100%;
    margin-top: 140px;
  }
  </style>