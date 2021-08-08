<template>
    <div class="galeria">
        <nav-bar></nav-bar>
        <p>Esta es la galeria</p>
        <the-footer></the-footer>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import TheFooter from '@/components/TheFooter.vue'


    export default {
        name: 'Galeria',
        components:{
            NavBar,
            TheFooter
        }
    
    }
</script>

