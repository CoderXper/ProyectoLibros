<template>
    <b-container>
        <b-row>
            <!-- Primera Columna donde se despliegan la galeria de libros -->
            <b-col cols="9">
                <slot name="libros"> </slot>
            </b-col>
            <!-- Segunda Columna con el carrito de reservas -->
            <b-col cols="3">
                <slot name="cart"> </slot>
            </b-col>
        </b-row>
    </b-container>
</template>

