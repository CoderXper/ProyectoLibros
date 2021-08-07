<template>
    <div class="admin">
        <nav-bar></nav-bar>
        <the-login></the-login>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import TheLogin from '@/components/TheLogin.vue'

    
    export default {
        name: 'Admin',
        components:{
            NavBar,
            TheLogin,

        }

}
</script>