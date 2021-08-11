<template>
  <div class="container">
    <nav-bar></nav-bar>
    <div class="container">
      <h1 class="mt-1 text-center">ACERCA DEL EQUIPO</h1>
    </div>
      <!-- Area de miembros  -->
    <div class="container-fluid mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col mt-2" v-for="(item, index) of team" :key="index">
          <!-- v-bind se puede abreviar como :member solamente -->
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>
  <the-footer></the-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import TeamCard from '@/components/TeamCard.vue'

export default {
  name:'about',
  components:{
    NavBar,
    TeamCard,
    TheFooter,
  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "Gustavo A. Gómez C.",
          descripcion:
            "Ingeniero Civil",
          rol: "Desarrollador Backend",
          image: "./imagenes/gustav.jpeg",
        },
        {
          codigo: 2,
          nombre: "Alejandro Peláez",
          descripcion:
            "Ingeniero Físico",
          rol: "Desarrollador backend",
          image: "./imagenes/photo.jpg",
        },
        {
          codigo: 3,
          nombre: "Ivan Aldana",
          descripcion:
            "Ingeniero Petróleos",
          rol: "Desarrollador backend",
          image: "./imagenes/photo.jpg",
        },
      ],
    };
  },
}
</script>
