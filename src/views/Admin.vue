<template>
    <div class="admin">
        <nav-bar></nav-bar>
        <the-login></the-login>
        <the-footer></the-footer>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import TheLogin from '@/components/TheLogin.vue'
    import TheFooter from '@/components/TheFooter.vue'

    
    export default {
        name: 'Admin',
        components:{
            NavBar,
            TheLogin,
            TheFooter,

        }

}
</script>