<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios';

    const props = defineProps({
        id: {
            type: String,
            required: true
        },
        news_id: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        source: {
            type: String,
            required: true
        }
    })
</script>

<template>

</template>

<style>
</style>