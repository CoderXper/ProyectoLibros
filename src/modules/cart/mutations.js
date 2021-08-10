export function addLibro (state, libro){
    const tempLibroInCart = state.cart.find(item => item.isbn == libro.isbn)
    if(!tempLibroInCart){
    //assign copia todas la propiedades enumerables de uno o mas objetos fuente a un objeto destino, devuelve el objeto destino
        let tempLibro = Object.assign({}, libro);
        tempLibro.qty = 1;
        state.cart.push(tempLibro)
    }else{
        tempLibroInCart.qty +=1;
    }
}
// filter crea un nuevo array con todos los elementos que cumplan la condicion implementada por la función
export function removeLibroFromCart(state, libro){
    state.cart = state.cart.filter(({isbn})=>isbn !== libro.isbn);
}