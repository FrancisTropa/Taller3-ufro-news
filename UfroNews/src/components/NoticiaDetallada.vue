<template>
    <div class="news-container">
      <h2 class="title">{{ noticia.title }}</h2>
      <img :src="noticia.imageUrl" alt="Imagen principal" class="img-principal">
      <p class="resume">{{ noticia.details && noticia.details.resume }}</p>
      <p v-html="noticia.details && noticia.details.body" class="content"></p>
      <a :href="noticia.source" class="btn btn-primary">Ir a fuente original</a>
      <div v-if="noticia.details && noticia.details.images" v-for="(image, index) in noticia.details.images" :key="index">
        <img :src="image" class="img-news">
      </div>
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
    background-color: rgb(206, 206, 201);
  }

  .title{
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .img-principal{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }

  .img-news{
    margin: 10px;
    width: 300px;
    height: 200px;
  }

  .resume{
    font-size: large;
    color: black;
    padding: 15px;
    margin-bottom: 10px;
  }

  .content{
    margin-bottom: 20px;
    padding: 10px;
  }

  .btn-primary{
    font-size: larger;
    color: aliceblue;
    background-color: rgb(86, 86, 201);
    padding: 5px;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .btn-primary:hover{
    background-color: rgb(129, 188, 255);
  }
  </style>