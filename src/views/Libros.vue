<template>
        <b-container>
            <b-nav small align="center">
                <!-- <b-nav-item :to="{name:'Libros'}">LISTADO DE LIBROS</b-nav-item> -->
                <b-nav-item :to="{name:'Libros-create'}">Crear Libro</b-nav-item>
                <!-- <b-nav-item :to="{name:'Libros-update'}">Actualizar Libro</b-nav-item> -->
            </b-nav>
            <b-row>
                <b-col cols="12">
                    <h2> Mis Libros para Intercambiar</h2>
                    <b-row>
                        <b-col cols="2">Isbn|</b-col>
                        <b-col cols="3">Titulo|</b-col>
                        <b-col cols="3">Autor|</b-col>
                        <b-col cols="1">Disponible|</b-col>
                        <!-- <b><b-col cols="2">Date</b-col></b> -->
                    </b-row>
                    <books-list :libros="disponibles" class="small">
                    </books-list>
                </b-col>

                <b-col cols="12" class="mb-5">
                    <h2> Lo que estoy leyendo</h2>
                        <b-row >
                            <b-col cols="3">Isbn|</b-col>
                            <b-col cols="3">Titulo|</b-col>
                            <b-col cols="3">Autor|</b-col>
                            <b-col cols="1">Disponible|</b-col>
                            <!-- <b><b-col cols="2">Date</b-col></b> -->
                        </b-row>
                    <books-list :libros="reservados" class="small">
                    </books-list>
                    </b-col>
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
        // console.log(this.$route);
        this.fetchLibros('mago2004')
        // this.fetchLibros('')
    },
    methods:{
        ...mapActions('libros', ['fetchLibros'])
    },
}
 </script>