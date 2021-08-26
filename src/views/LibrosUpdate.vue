<template>
    <div v-if="selectedBook">
        <books-form :libro="selectedBook"
            @submitForm="updateLibro"
            submitText="Actualizar libro"
        ></books-form>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations} from 'vuex'

import BooksForm from '@/components/crud/BooksForm.vue'

export default {
    name: 'LibrosUpdate',
    components:{
        BooksForm
    },
    computed:{
        // tenemos dentro del alcance el libro que se quiere editar
        ...mapState('libros', ['selectedBook'])
    },
    created(){
        if (this.selectedBook == null){
            this._fetchLibro(this.$route.params.id)

        }
    },
    methods: {
        ...mapActions({
            _updateLibro: 'libros/updateLibro',
            _fetchLibro: 'libros/fetchLibro'
            
        }),
        updateLibro(libro){
            this._updateLibro(libro).then(() => {
                this.$router.push({ name: 'Libros' })
            })
        }
    }
    
}
</script>