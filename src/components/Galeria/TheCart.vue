<template>
    <div v-if="cart.length" class="mt-2">
        <b-table striped hover :items="cart" :fields="fields">
            <template #cell(actions)="row">
                <b-button variant="danger" @click="removeItem(row)">
                    Eliminar
                </b-button>
            </template>
        </b-table>
        <!-- <b-alert variant="success" show>Costo total: Cop. $ {{ totalCost }}</b-alert> -->
    </div>
    <b-alert v-else variant="info" show class="mt-2">No hay productos en tu carrito</b-alert>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'TheCart',
    data(){
        return {
            fields: ['title', 'qty', 'pageCount', 'actions'],
        }
    },
    computed: {
        ...mapState('cart', ['cart']),
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart', ['removeLibroFromCart']),
        removeItem(row){
            console.log(row);
            this.removeLibroFromCart(row.item);
        }
    }
}
</script>