const productos = [
    ["laptop", 1200],
    ["celular", 850],
    ["memoria", 160]
    ];
  
  
  function precioproducto(nombre){
  //recibe nombre y regresa el precio
  const precio = productos.find(producto=>producto[0] === nombre);

  console.log("El precio del producto es: ")
  console.log(precio ? precio[1] : "producto no encontrado ");
    
  }
  
  
  
//Suma de precios
function Sumadeprecio(seleciondeproductos) {
    let final = 0;
    for (const product of seleciondeproductos){
        const precio = precioproducto(product);
        if(typeof precio==="numero"){
            final += precio;
                 
        }
}
console.log ("El precio final es: "+final);
}




  
  function calculartotal(cosa, descuento){
    //Descuento 
    const preciofinal = precioproducto(cosa);  
    if (typeof preciofinal === "numero"){

        const preciodescuento = preciofinal - (preciofinal* (descuento / 100));
        console.log (preciodescuento);
 }
 console.log("No se encontro el prodeucto");
    
  }

  precioproducto("memoria");
  Sumadeprecio ([ "memoria", "celular" ]);
  calculartotal ("laptop", 10 );
  