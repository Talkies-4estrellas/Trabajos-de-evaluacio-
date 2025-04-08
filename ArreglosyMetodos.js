const Empleados = [
    [ "lunes", "María"],
    [ "martes", "Luis"],
    [ "miércoles", "Antonia"],
    [ "jueves", "Pedro"],
    [ "viernes", "Marisa" ]
];

// Función que devuelve el nombre de la persona encargada

function Encargadodeldia(dia) {
    const encargado = Empleados.filter(turno => turno[0] === dia);

    let encargadodia = encargado[0][1];
    
    if (encargadodia) {
        console.log("El encargado es: "+ encargadodia);

    }else{ 
        console.log("No hay servicio este día");
     }
}
Encargadodeldia("martes");




