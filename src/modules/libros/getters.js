export function reservados(state){
    return state.libros.filter(livre =>!livre.disponible)
}
export function disponibles(state){
    return state.libros.filter(livre =>livre.disponible)
}