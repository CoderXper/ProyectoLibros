export function reservados(state){
    return state.libros.filter(livre =>!livre.disponible)
}
export function disponibles(state){
    return state.libros.filter(livre =>livre.disponible)
}

export function disponiblesOtroUsuario(state){
    // console.log(state.libros);
    return state.libros.filter(l => 
        l.disponible && l.idusuario != 'mago2004'
    )
}