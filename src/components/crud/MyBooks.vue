<template>
    <div>
        
        <b-row cols="12">
            <b-col cols="3">{{libro.isbn}}  </b-col>
            <b-col cols="3">{{libro.titulo}}</b-col>
            <b-col cols="3">{{libro.autor}}</b-col>
            <!-- <b-col cols="2">{{libro.create_date}}</b-col> -->
            <b-col cols="3">
                <b-button
                    size="sm"
                    @click="goToUpdateLibro"
                >
                    <i class="fas fa-edit"></i>
                </b-button>
                <b-button variant="outline-primary"
                    size="sm"
                    @click="updateEstadoLibro"
                >
                    <i class="fas" :class="libro.disponible?'fa-lock': 'fa-unlock'"></i>
                </b-button>
                <b-button variant="danger"
                    size="sm"
                    @click="deleteLibro"
                >
                    <i class="fas fa-trash-alt"></i>
                </b-button>

            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
    name:'MyBooks',
    // props para recibir variables cuando se instancia un componente
    props:{
        libro:{
            type: Object,
            required: true
        }
    },
    methods:{
        ...mapActions({
            // Ver documentacion Vuex libros es el namespace
            _updateEstadoLibro: 'libros/updateEstadoLibro',
            _removeLibro: 'libros/deleteLibro',
            _crearLibro: 'libros/addLibros'
        }),
        // libros es el namaspaced del modulo de vuex
        // ['setlibro] lista de nombre de mutaciones que queremos seleccionar
        ...mapMutations('libros', ['setLibro']),
        goToUpdateLibro(){
            this.setLibro(this.libro)
            // Navegación programada
            // 3 caminos para mover al usuario sin hacer clic o que cuando haga clic se simula la navegacion(push, replace, go)
            // push es como oprimir hipervinculo A, al hacer clic en atras vuelve a la posicion anterior
            // replace no guarda registro en la historia, al dar atras no lleva a ningun lado (no existe la ruta)
            this.$router.push({
                name:'Libros-update',
                params:{id:this.libro._id}
            })
        },
        newLibro(){
            this.addLibro()
            this.$router.push({
                name:'Libros-create',
                params:{}
            })
        },
        
        updateEstadoLibro(){
            this._updateEstadoLibro(this.libro)
        },
        deleteLibro(){
            this._removeLibro(this.libro)
        }
    }
}
</script>