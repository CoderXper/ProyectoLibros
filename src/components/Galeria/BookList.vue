<template>
    <!-- Comprobamos que el arreglo de libros tenga elementos para desplegar en pantalla -->
    <div v-if="libros.length" class="mt-2">
        <paginate
        name="libros"
        :list="libros"
        :per="perPage"
        >
            <b-card-group columns>
                <book-item
                    v-for="item in paginated('libros')"
                    :key=item.id
                    :libro="item"
                    @add-to-cart= "addLibroToCart"
                >
                </book-item>
            </b-card-group>
        </paginate>
            
        <paginate-links
        for="libros"
            :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'}"
        >
        </paginate-links>
    </div>
    <!-- En caso de que el arreglo de libros no tenga items muetra el siguiente mensaje -->
    <b-alert v-else variant="danger" show>
        No hay libros disponibles en el momento
    </b-alert>

</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import BookItem from '@/components/Galeria/BookItem'

export default {
    name: 'BookList',
    components:{
        BookItem
    },
    data(){
        return{
            paginate: ['libros'],
            perPage: 3
        }
    },
    mounted(){
        this.fetchLibros();
    },
    computed: {
        ...mapState('libros', ['libros'])
    },
    methods: {
        ...mapActions('libros', ['fetchLibros']),
        ...mapMutations('cart', ['addLibro']),
        addLibroToCart(libro){
            this.addLibro(libro);
        }

    }
}
</script>