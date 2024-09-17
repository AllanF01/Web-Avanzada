//Crear un Script donde implemente diferentes Interface y Type. 
type Direccion = {
    calle: string;
    ciudad: string;
    pais: string;
};

interface Usuario {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

// Uso de type e interface
const usuario: Usuario = {
    nombre: 'Allan',
    edad: 19,
    direccion: {
        calle: 'Calle Sanchez 18',
        ciudad: 'Santo Domingo',
        pais: 'República Dominicana'
    }
};

console.log(usuario);