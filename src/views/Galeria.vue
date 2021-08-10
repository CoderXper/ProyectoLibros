<template>
    <div class="galeria">
        <nav-bar></nav-bar>
        <layout>
            <template slot="libros">
                <book-list></book-list>
            </template>
            
            <template slot="cart">
                <the-cart></the-cart>
            </template>


        </layout>
        <the-footer></the-footer>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import TheFooter from '@/components/TheFooter.vue'
    import Layout from '@/layout/Layout'
    import BookList from '@/components/Galeria/BookList'
    import TheCart from '@/components/Galeria/TheCart'

    export default {
        name: 'Galeria',
        components:{
            NavBar,
            Layout,
            BookList,
            TheCart,
            TheFooter
        }
    
    }
</script>

