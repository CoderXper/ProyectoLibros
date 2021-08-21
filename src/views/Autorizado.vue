<template>
    <div>
        <nav-bar></nav-bar>
        <the-menu></the-menu>
        <div class="container d-flex justify-content-center mt-2">
        <img src="@/assets/imagenes/libro.png" alt="imagen bienvenida">
        </div>
        <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheMenu  from '@/components/crud/TheMenu.vue'
import TopCarrusel from '@/components/TopCarrusel.vue'

export default {
    name:'Autorizado',
    components:{
        NavBar,
        TheMenu,
        TopCarrusel,
    }
}
</script>