<template>
    <b-container>
        <b-form-row >
            <b-col cols="5" class="mt-2">
                <img src="../../public/imagenes/Bienvenido.png" alt="Bienvenido a seccion Administrador">
            </b-col>

            <b-col cols="7" align-self="center">
                <b-container fluid>
                            <label for="exampleInputEmail1">Correo Electrónico</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">Tus datos están seguros.</small>
                            
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                            <b-button type="submit" class="btn btn-primary mt-2" router-link to= '/autorizado'>Ingresar</b-button>
                </b-container>
            </b-col>
        </b-form-row>
    </b-container>
</template>


<script>
export default {
  name: 'TheLogin',
  }
</script>