<template>
    <b-row>
        <b-col cols="4">
        <div class="card text-white bg-dark shadow-lg" style="border-radius: 15px; height:100%; min-width:330px;" >
            <div class="d-flex justify-content-center py-3">
            <!-- v-bind para llamar propiedades dinamicas -->
            <img
                v-bind:src="member.image"
                alt="Foto del equipo"
                height="150"
                width="auto"
                style="border-radius: 15px"
            />
            </div>

            <div class="card-body">
            <h3 class="card-title text-center">{{ member.nombre }}</h3>
            <p class="card-text pt-3">{{ member.descripcion }}</p>
            <p class="card-text"><span>Rol: </span> {{ member.rol }}</p>
            <!-- <p class="card-text"><span>Codigo: </span> {{ member. }}</p> -->
          </div>
        </div>
        </b-col>
        <b-col cols="4"></b-col>
        <b-col cols="4"></b-col>
    </b-row>
  
  
    <!-- <div class="container" id="team"> -->
      <!-- <div class="row justify-content mb-5"> -->

          

</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
