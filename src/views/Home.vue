<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav-bar></nav-bar>
    <top-carrusel></top-carrusel>
    <the-services></the-services>
    <the-footer></the-footer>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import TopCarrusel from '@/components/TopCarrusel.vue'
import TheServices from '@/components/TheServices.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    NavBar,
    TopCarrusel,
    TheServices,
    TheFooter
  }
}
</script>
