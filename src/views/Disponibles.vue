<template>
        <b-container>
            <b-nav small align="center">
                <!-- <b-nav-item :to="{name:'Libros'}">LISTADO DE LIBROS</b-nav-item> -->
                <b-nav-item :to="{name:'Libros-create'}">Crear Libro</b-nav-item>
                <!-- <b-nav-item :to="{name:'Libros-update'}">Actualizar Libro</b-nav-item> -->
            </b-nav>

            <b-row class="mb-5">
                <b-col cols="12">
                    <h2> Libros para Intercambio</h2>
                    <b-row>
                        <b-col cols="3">Isbn |</b-col>
                        <b-col cols="3">Titulo |</b-col>
                        <b-col cols="3">Autor |</b-col>
                        <!-- <b><b-col cols="2">Date</b-col></b> -->
                    </b-row>
                    <books-list :libros="disponibles " class="small">
                    </books-list>
                </b-col>

                <!-- <b-col cols="6">
                    <h2> Libros Reservados</h2>
                    <books-list :libros="reservados" class="small">
                    </books-list>
                    </b-col> -->
            </b-row>

        </b-container>

</template>

<script>
import BooksList from '@/components/crud/BooksList.vue';
import {mapActions,mapGetters} from 'vuex'
export default {
    name:'Libros',
    components:{
        BooksList, 
    },
    computed:{
        ...mapGetters('libros', ['reservados', 'disponibles'])
    },
    mounted(){
        // this.fetchLibros('mago2004')
        this.fetchLibros('')
    },
    methods:{
        ...mapActions('libros', ['fetchLibros'])
    },
}
 </script>