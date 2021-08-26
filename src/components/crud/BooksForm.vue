 <template>
    <!-- Se usa Vuelidate para validar formularios y Bootstrap-Vue -->
    <b-form @submit.prevent="$emit('submitForm', libro)">
        <b-form-group id="libro-input">
            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.isbn"
                placeholder="Introduce el isbn del libro nuevo"
                v-bind:state="!$v.libro.isbn.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>
            <b-form-input autocomplete="off"
                id="titulo"
                v-model="libro.titulo"
                placeholder="Introduce el titulo del libro"
                v-bind:state="!$v.libro.titulo.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>
            <b-form-input autocomplete="off"
                id="autor"
                v-model="libro.autor"
                placeholder="Introduce el autor del libro"
                v-bind:state="!$v.libro.autor.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>

            <b-form-input autocomplete="off"
                id="idusuario"
                v-model="libro.idusuario"
                placeholder="Introduce el nombre de usuario"
                v-bind:state="!$v.libro.idusuario.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>

            <b-form-input autocomplete="off"
                id="paginas"
                v-model="libro.totalpaginas"
                placeholder="Introduce el total de paginas del libro"
                v-bind:state="!$v.libro.totalpaginas.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>
            
            <b-form-input autocomplete="off"
                id="url"
                v-model="libro.url"
                placeholder="Introduce la imagen (url) del libro"
                v-bind:state="!$v.libro.url.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>

            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.edades"
                placeholder="Introduce la edad recomendada de lectura"
                v-bind:state="!$v.libro.edades.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>


            <b-form-invalid-feedback id="libroInfo"
                v-if="$v.libro.$dirty">
                Existen campos inválidos por favor revisar
            </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit"
            variant="primary"
            :disabled="$v.libro.$invalid"
        >
            {{ submitText }}
        </b-button>
    </b-form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    name: 'BooksForm',
    mixins: [validationMixin],
    props:{
        libro: {
            type: Object,
            required: true
        },
        submitText: {
            type: String,
            default: 'Crear libro'
        }
    },
    validations: {
        libro: {
            isbn: {
                required, minLength: minLength(4)
            },
            titulo: {
                minLength: minLength(4)
            },
            autor: {
                minLength: minLength(4)
            },
            totalpaginas: {
                minLength: minLength(2)
            },
            url: {
                minLength: minLength(4)
            },
            idusuario: {
                minLength: minLength(4)
            },
            edades: {
                 minLength: minLength(2)
            },
            // disponible: {
            //      minLength: minLength(2)
            // }
        
        }
    }
}
</script>