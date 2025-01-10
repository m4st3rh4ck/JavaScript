/*                                  Ejercicio
Crea la función agregarPromedios que tome un array de estudiantes con sus respectivas 
calificaciones y devuelva un nuevo array con la información de cada estudiante, incluyendo el promedio de sus calificaciones

Ejemplo

const estudiantes = [
  { nombre: "Ana", calificaciones: [7, 8, 9] },
  { nombre: "Luis", calificaciones: [5, 3, 2] }
];

console.log(agregarInformacionEstudiante(estudiantes));
// Debería imprimir:
// [
//   { nombre: "Ana", calificaciones: [7, 8, 9], promedio: 8  },
//   { nombre: "Luis", calificaciones: [5, 3, 2], promedio: 3.33 }
// ]
Nota: Redondea el promedio a dos decimales utilizando el método toFixed(2).
*/

function agregarPromedios(estudiantes) {
    const estudiantesConPromedios = [];
    
    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const sumaCalificaciones = estudiante.calificaciones.reduce((acum, calif) => acum + calif, 0);
        const promedio = sumaCalificaciones / estudiante.calificaciones.length;
        
        // Crear un nuevo objeto con la información del estudiante y el promedio
        estudiantesConPromedios.push({
            nombre: estudiante.nombre,
            calificaciones: estudiante.calificaciones,
            promedio: parseFloat(promedio.toFixed(2))
        });
    }

    return estudiantesConPromedios;
}

const estudiantes = [
  { nombre: "Carlos", calificaciones: [8, 7, 9] },
  { nombre: "Laura", calificaciones: [6, 6, 5] },
  { nombre: "Pedro", calificaciones: [10, 10, 9] },
  { nombre: "Sofía", calificaciones: [4, 3, 5] }
];

console.log(agregarPromedios(estudiantes));
