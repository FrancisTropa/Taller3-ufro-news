<template>
    <div class="card">
      <img :src="img" class="card-img">
      <div class="card-body">
        <h5 class="card-title">{{ titulo }}</h5>
        <div class="access-btn">
          <router-link :to="'/noticia/' + newsId" class="btn btn-primary">Ver detalles</router-link>
          <a :href="source" class="btn btn-primary">Leer más</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [
      'newsId',
      'titulo',
      'img',
      'source'],
  }
  </script>
  
  <style scoped>
  .card {
    width: 25rem;
    background-color: beige;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
  }
  .card-img {
    width: 100%;
    height: auto;
    padding-top: 15px;
  }

  .card-title{
    margin-bottom: 10px;
  }

  .access-btn{
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  .btn-primary{
    font-size: larger;
    color: aliceblue;
    background-color: rgb(86, 86, 201);
    padding: 5px;
    border-radius: 10px;
  }

  .btn-primary:hover{
    background-color: rgb(129, 188, 255);
  }
  </style>