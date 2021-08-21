import Vue from 'vue';   // in Vue 2
import axios from 'axios';
import VueAxios from 'vue-axios';

const baseURL = 'http://localhost:3000';
// const baseURL = 'https://libroalbedrio.herokuapp.com/';
axios.defaults.baseURL = baseURL;

Vue.use(VueAxios, axios)
