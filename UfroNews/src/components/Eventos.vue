<template>
    <div class="card">
        <div class="event-header">
            <h1 class="title">{{ title }}</h1>
            <p class="date">{{ day }} {{ month }} {{ year }}</p>
        </div>
        <div>
            <a :href="source" class="btn btn-primary">Ir al evento</a>
        </div>
    </div>
</template>

<script>
    export default{
        props: [
            'title',
            'day',
            'month',
            'year',
            'source'
        ]}
</script>

<style>
    .card{
        background-color: rgb(109, 124, 223);
        width: 100%;
        margin: 15px;
        padding: 10px;
        padding-left: 20px;
        border-radius: 10px;
    }

    .title{
        font-size: xx-large;
        font-weight: bold;
        color: black;
    }

    .date{
        font-size: large;
        margin-bottom: 10px;
    }

    .btn-primary{
        font-size: larger;
        color: aliceblue;
        background-color: rgb(37, 37, 155);
        padding: 5px;
        border-radius: 10px;
    }

    .btn-primary:hover{
        background-color: rgb(117, 188, 255);
    }
</style>