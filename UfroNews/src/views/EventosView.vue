<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import Eventos from '../components/Eventos.vue'

const eventos = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://3.138.52.135:3000/events/');
        eventos.value = response.data.events;
    } catch (error) {
        console.log(error)
        console.log('Error ;(')
    }
});
</script>

<template>
      <div class="card-container">
        <Eventos v-for="e in eventos" :key="e._id" :title="e.title" :source="e.source" :day="e.day" :month="e.month" :year="e.year"/>
      </div>
  </template>

<style>
  .card-container {
  width: 100%;
  margin-top: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: space-around;
}
</style>