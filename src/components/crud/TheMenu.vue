<template>
    <div class="container">
        <b-nav>
            <b-nav-item active router-link to="/autorizado/libros">Mis Libros|</b-nav-item>
            <b-nav-item router-link to="/autorizado/disponibles">Libros Disponibles|</b-nav-item>
            <b-nav-item router-link to="/autorizado/disponibles">Solicitudes Recibidas|</b-nav-item>
            <b-nav-item router-link to="/autorizado/disponibles">Solicitudes Enviadas|</b-nav-item>
        </b-nav>
</div>
</template>

<script>
export default {
    name: 'TheMenu',
    
}
</script>