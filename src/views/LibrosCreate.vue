<template>
    <div>
        <h1>Ingresar Nuevo Libro</h1>
        <books-form :libro="libro" @submit-form="addLibro"></books-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import BooksForm from '@/components/crud/BooksForm.vue'

export default {
    name: 'LibrosCreate',
    components:{
        BooksForm
    },
    data(){
        return {
            libro: {
                isbn: '',
                titulo: '',
                idusuario: '',
                edades: '',
                totalpaginas: '',
                url: '',
                autor: ''
            }
        }
    },
    methods: {
        ...mapActions({
            createLibro: 'libros/addLibros'
        }),
        addLibro(libro){
            this.createLibro(libro).then(() => {
                this.$router.push('/autorizado/libros')
            })
        }
    }
}
</script>

