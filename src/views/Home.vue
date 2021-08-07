<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav-bar></nav-bar>
    <top-carrusel></top-carrusel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import TopCarrusel from '@/components/TopCarrusel.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    NavBar,
    TopCarrusel,
  }
}
</script>
