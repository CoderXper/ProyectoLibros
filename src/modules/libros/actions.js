//Las acciones pueden contener operaciones asincronar arbitrarias
export async function fetchLibros({ commit }){
    const data = await fetch('fixeddata/libros.json');
    const libros = await data.json();
    commit('setLibros', libros);
}