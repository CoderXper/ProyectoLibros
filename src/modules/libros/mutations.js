
export function setLibros(state, libros){
    state.libros = libros
}

export function setLibro(state, libro){
    state.selectedBook = libro
}

export function updateBookAvailable(state, payload){
    const libro = state.libros.find(livre => livre.id ===payload.id);
    if (libro){
        libro.disponible = !libro.disponible;
    }
    // state.selectedBook.disponible = available
}

export function librosError(state, payload){
    state.error = true;
    state.errorMessage = payload
    // para envitar basura en el array de libros
    state.libros = [];
}