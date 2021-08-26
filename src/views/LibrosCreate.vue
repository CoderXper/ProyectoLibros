<template>
    <div class="container">
        <h1>Ingresar Nuevo Libro</h1>
        <books-form :libro="libro" @submitForm="addLibro"></books-form>
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
                idusuario: '',
                autor: '',
                titulo: '',
                totalpaginas: '',
                edades: '',
                disponible: true,
                url: '',
                // forGroup:{
                    // nested: {required}
                // }
            }
        }
    },
    methods: {
        ...mapActions({
            createLibro: 'libros/addLibros'
        }),
        addLibro(libro){
            this.createLibro(libro).then(() =>{
                this.$bvToast.toast(`El libro ${this.libro.titulo} fue guardado en la base de datos`, {
                    title: 'Operación Realizada Exitosamente',
                    autoHideDelay: 5000,
                })   
                this.libro = {
                    isbn: '',
                    idusuario: '',
                    autor: '',
                    titulo: '',
                    totalpaginas: '',
                    edades: '',
                    disponible: true,
                    url: '',
            }

            })
        }
    }
}
</script>

