<template>
        <b-container>
            <my-books></my-books>
        </b-container>

</template>

<script>
import MyBooks from '@/components/crud/MyBooks.vue'

export default {
    name:'Libros',
    components:{
        MyBooks,
    }
    
}
</script>