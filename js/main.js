// Guardar el estado (columna activa)
let columnaActiva = 1;

// Seleccionar las columnas 
const  columnas  = document.querySelectorAll(".columna")   // Selecciono las columnas sobre las que quiero hacer click
console.log("ESTAS SON LAS COLUMNAS: ");
console.log(columnas);
console.log("---------------------------------------------------------")

console.warn(columnas);



/* document es todos los elementos del DOM,querySelectorAll, consulta todos los elementos con clase 
".columna" */

// Escuchar los "clicks" en cada una de ellas | Recorrer cada una de las columnas
columnas.forEach((columnaRecorriendo, indice) => {  // cuando estoy ante un forEach saber que la primera
    //variable es la que recorre el array y la segunda es el que guarda el indice en cada ronda
    //No es obligatorio poner indice pero lo puedo usar, pasarselo siempre y solucionado

    console.log(columnaRecorriendo) // No haria falta realemnte
    
    columnaRecorriendo.addEventListener("click", function(){
        cambiarColumna(indice)

    })
}); 
// a es el elemento que recorre el forEach

// Cambiar el estado de las columnas 

function cambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa")   // Es un elemento iterable, parecido a un array
    // Seleccionamos la posicion "columnaActiva, es decir la 1" y se le quita la clase activa con 
    //el classList es para entrar a las clases

    columnas[indice].classList.add("activa")
    columnaActiva = indice   // importante para que funcione esto para mas de una vez de click
    // Actualizamos el indice de la columna, sino siempre me quitaria el indice de la posicion 1
    //y no funcionaria para las otras.
}
