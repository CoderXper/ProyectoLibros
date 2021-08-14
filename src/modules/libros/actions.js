//Las acciones pueden contener operaciones asincronar arbitrarias
export async function fetchLibros({ commit }){
    // const data = await fetch('fixeddata/libros.json');
    const response = await fetch('http://localhost:3000/api/libros');
    const libros = await response.json();
    console.log(libros)
    commit('setLibros', libros.data);
} 