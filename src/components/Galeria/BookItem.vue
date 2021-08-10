<template>
    <b-card
        v-bind:title= "libro.title"
        v-bind:img-src= "libro.thumbnailUrl"
        v-bind:img-alt= "libro.title"
        img-top 
        style="max-width: 20rem;"
        class="mb-2"
  >
        <p>Disponible: {{libro.status}}</p> 
        <p>Número Paginas: {{libro.pageCount}}</p> 
        <p>ISBN: {{libro.isbn}}</p>
        <p>Usuario: {{libro.authors}}</p>

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
