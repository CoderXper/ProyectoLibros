<template>
  <div class="about">
    <nav-bar></nav-bar>
    <h1>This is an about page</h1>
    <the-footer></the-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name:'about',
  components:{
    NavBar,
    TheFooter,

  }
}
</script>
