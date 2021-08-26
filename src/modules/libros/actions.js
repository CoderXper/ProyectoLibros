import Vue from 'vue';

// REVISAR Context, del cual solo nos interesa el commit
export async function fetchLibros({ commit }, idusuario=''){
    let url = '/api/libros';
    if (idusuario !=''){
        url+= '?idusuario='+ idusuario;
    }
    await Vue.axios.get(url).then((response) =>{
        commit('setLibros', response.data.libros)
    }).catch((error)=>{
        commit('librosError', error.message)
    }).finally(() =>{
        console.log("Peticion de fetchLibros resuelta")
    })
}

export async function addLibros({ commit, dispatch }, libro){
    return await Vue.axios.post('/api/libros',libro).catch((error)=>{
        commit('librosError', error.message)
    }).finally(() =>{
        dispatch('fetchLibros');
        console.log("Peticion de addLibros resuelta")
    })
}


export async function updateLibro({commit},libro){
    await Vue.axios.put(`/api/libros/${libro.id}`,{
        isbn:libro.id,
        idusuario: libro.idusuario,
        autor: libro.autor,
        titulo: libro.titulo,
        totalpaginas:libro.totalpaginas,
        edades: libro.edades,
        disponible: libro.disponible,
        url: libro.url
    }).catch((error)=>{
        commit('librosError', error.message)
    }).finally(() =>{
        console.log("Peticion de updateLibro resuelta")
    })
}

export async function updateEstadoLibro({commit},libro){
    await Vue.axios.put(`/api/libros/${libro.id}`,{
        isbn:libro.id,
        idusuario: libro.idusuario,
        autor: libro.autor,
        titulo: libro.titulo,
        totalpaginas:libro.totalpaginas,
        edades: libro.edades,
        disponible: !libro.disponible,
        url: libro.url,
    }).catch((error)=>{
        commit('librosError', error.message)
    }).finally(() =>{
        console.log("Peticion de updateEstadoLibro resuelta")
    })
}


export async function deleteLibro({commit, dispatch}, libro){
    await Vue.axios.delete(`/api/libros/${libro.id}`)
    .catch((error)=>{
        commit('librosError', error.message) 
    }).finally(() =>{
        dispatch('fetchLibros');
        console.log("Peticion de deleteLibros resuelta")
    })
}


export async function fetchLibro({ commit }, id=''){
    let url = '/api/libros/'+ id;
    await Vue.axios.get(url).then((response) =>{
        commit('setLibro', response.data.libro)
    }).catch((error)=>{
        commit('librosError', error.message)
    }).finally(() =>{
        console.log("Peticion de fetchLibro resuelta")
    })
}