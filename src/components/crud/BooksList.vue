<template>
    <div v-if="libros.length">
        <my-books
            v-for="libro in libros"
            :key="libro.id"
            v-bind:libro="libro"
        ></my-books>
    </div>
    <b-alert v-else show variant="light">
        No hay libros que mostrar
    </b-alert>
</template>

<script>
import MyBooks from './MyBooks.vue'

export default {
    name: 'BooksList',
    components:{ 
        MyBooks
    },
    props:{ 
        libros: {
            type: Array,
            required: true
        }
    }
}
</script>