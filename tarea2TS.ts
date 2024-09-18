// Función que devuelve un usuario como promesa

function obtenerUsuario(): Promise<{ nombre: string, actividades: string[] }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nombre: 'Juan',
                actividades: ['correr', 'nadar', 'leer']
            });
        }, 1000); //Retraso de 1 segundo.
    });
}

// Función que imprime actividades secuencialmente
function obtenerActividades(actividades: string[]): Promise<void> {
    return new Promise((resolve) => {
        actividades.forEach((actividad, index) => {
            setTimeout(() => {
                console.log(`Actividad ${index + 1}: ${actividad}`);
                if (index === actividades.length - 1) {
                    resolve();
                }
            }, (index + 1) * 1000); // Retraso de 1 segundo entre actividades
        });
    });
}

// Lógica principal
obtenerUsuario()
    .then(({ nombre, actividades }) => {
        console.log(`Usuario: ${nombre}`);
        return obtenerActividades(actividades);
    })
    .then(() => {
        console.log('Todas las actividades fueron impresas.');
    });