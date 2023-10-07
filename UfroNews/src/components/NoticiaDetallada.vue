<template>
    <div class="news-container">
      <h2 class="title">{{ noticia.title }}</h2>
      <img :src="noticia.imageUrl" alt="Imagen de la noticia">
      <p v-html="noticia.details && noticia.details.body"></p>
      
      <div v-if="noticia.details && noticia.details.images" v-for="(image, index) in noticia.details.images" :key="index">
        <img :src="image" :alt="'Imagen ' + (index + 1)">
      </div>
      <a :href="noticia.source" class="btn btn-primary">Leer más</a>
    </div>
  </template>
  
  <script>
  export default {
    props: ['noticia'],
  }
  </script>
  
  <style scoped>
  .news-container {
    width: 100%;
    margin-top: 140px;
  }

  .title{
    font-weight: bold;
    color: black;
    text-align: center;
  }
  </style>