<template>
    <div class="navbar navbar-color">
        <img src="@/assets/images/UFRO horizontal.png" class="logo" alt="Ufro logo" width="300" height="100">
        <nav class="nav">
            <RouterLink class="nav-link" to="/">Noticias</RouterLink>
            <RouterLink class="nav-link" to="/eventos">Eventos</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    .navbar{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-color{
        background-color: rgb(189, 188, 186);
    }

    .logo{
        padding-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .nav-link{
        margin: 10px;
        padding: 10px;
        color: black;
        font-size: large;
        border-radius: 5px;
    }

    .nav-link:hover{
        background-color: rgb(245, 245, 238);
    }

</style>