/* Escribe una función en JavaScript que tome un array de números y devuelva un nuevo array con los números duplicados eliminados, 
es decir, que solo contenga números únicos.*/

function eliminarDuplicados(array) {
    return [...new Set(array)];
}


const numeros = [1, 2, 3, 4, 3, 2, 5, 1];
const numerosUnicos = eliminarDuplicados(numeros);
console.log(numerosUnicos);
