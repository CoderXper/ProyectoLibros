<template>
    <b-container>
    <!-- <my-interchange></my-interchange> -->
        <my-interchange></my-interchange>
        <p>pagina de intercambios</p>
    </b-container>
</template>

<script>
import MyInterchange from '@/components/crud/MyInterchange.vue'

export default {
    name: 'Intercambios',
    components: {
        MyInterchange,
    }
}
</script>