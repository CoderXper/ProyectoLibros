<template>
    <b-card
        v-bind:title= "libro.title"
        v-bind:img-src= "libro.url"
        v-bind:img-alt= "libro.title"
        img-top 
        style="max-width: 20rem;"
        class="mb-2"
  >
        <p>isbn: {{libro.isbn}}</p>
        <p>Edad: {{libro.edades}}</p> 
        <p>Número Paginas: {{libro.totalpaginas}}</p> 
        <p>Usuario: {{libro.idusuario}}</p>

        <b-button
        variant="primary"
        v-on:click="$emit('add-to-cart', libro)"      
        >
        Agregar</b-button>
  
  </b-card>

</template>

<script>
export default {
    props:{
        libro:{
            type: Object,
            required: true
        }
    }    
}
</script>
