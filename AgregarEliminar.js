let productos = [
    [   "laptops",  1200  ],
    [  "celulares",  850  ],
    [  "memorias",  160  ]
];

// Eliminar un producto específico
function quitarProducto(nombreProducto) {
    productos = productos.filter(matrys => matrys[0] !== nombreProducto);
    console.log("Se ha eliminado el producto: "+nombreProducto);
    console.log(productos);
}
quitarProducto("celulares");


// Agregar un producto específico
function agregarProducto(nombreProducto, precio) {
    productos.push([nombreProducto, precio]);
    console.log("La nueva lista es : ");
    console.log(productos);
}
agregarProducto("consola", 5200);


// Buscar un producto específico
function buscarProducto(nombreProducto) {
    const productoaencontrado = productos.find(item => item[0] === nombreProducto);
    if (productoaencontrado) {
        console.log("El producto encontrado es: ");
        console.log(productoaencontrado);

    } else {
        console.log("No se a encontrado el producto");
    }
}
buscarProducto("consola");
