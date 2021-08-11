<template>
    <div>
        <nav-bar></nav-bar>
        <the-menu></the-menu>
        <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheMenu  from '@/components/crud/TheMenu.vue'

export default {
    name:'Autorizado',
    components:{
        NavBar,
        TheMenu
    }
}
</script>