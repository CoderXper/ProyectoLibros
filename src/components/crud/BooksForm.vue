 <template>
    <!-- Se usa Vuelidate para validar formularios y Bootstrap-Vue -->
    <b-form @submit.prevent="$emit('submit-form', libro)" class="container">
        <b-form-group id="libro-input"
            label="Libro"
            label-for="libro"
        >
            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.isbn"
                placeholder="Introduce el isbn del libro nuevo"
                v-bind:state="!$v.libro.isbn.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>
            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.titulo"
                placeholder="Introduce el titulo del libro"
                v-bind:state="!$v.libro.titulo.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>
            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.autor"
                placeholder="Introduce el autor del libro"
                v-bind:state="!$v.libro.autor.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>

            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.idusuario"
                placeholder="Introduce el nombre de usuario"
                v-bind:state="!$v.libro.idusuario.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>

            <b-form-input autocomplete="off"
                id="libro"
                v-model="libro.totalpaginas"
                placeholder="Introduce el total de paginas del libro"
                v-bind:state="!$v.libro.totalpaginas.$invalid"
                @input="$v.libro.$touch"
            > </b-form-input>
            
            <b-form-input autocomplete="off"
                id="libro"
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


            <b-form-invalid-feedback id="isbnInfo"
                v-if="$v.libro.$dirty"
            >
                Este campo es requerido y con unas long min de 12 caracteres
            </b-form-invalid-feedback>
            
            <!-- <b-form-invalid-feedback id="tituloInfo"
                v-if="$v.libro.titulo.$dirty"
            >
                Este campo es requerido y con unas long min de 4 char
            </b-form-invalid-feedback>
            
            <b-form-invalid-feedback id="autorInfo"
                v-if="$v.libro.autor.$dirty"
            >
                Este campo es requerido y con unas long min de 4 char
            </b-form-invalid-feedback> -->

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
                required, minLength: minLength(12)
            },
            titulo: {
                required, minLength: minLength(4)
            },
            autor: {
                required, minLength: minLength(4)
            },
            totalpaginas: {
                required, minLength: minLength(2)
            },
            url: {
                required, minLength: minLength(2)
            },
            idusuario: {
                required, minLength: minLength(3)
            },
            edades: {
                required, minLength: minLength(1)
            },
            // disponible: {
            //     required, minLength: minLength(2)
            // }
        
        }
    }
}
</script>