<template>
  <div id="app">
    <div id="nav">
      <!-- <nav-bar></nav-bar> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  // mounted(){
  //   this.fetchLibros()
  // },
  // methods:{
  // // El primer parametro que se pasa en el namespace
  //   ...mapActions('libros', ['fetchLibros'])
  // }

}

</script>


