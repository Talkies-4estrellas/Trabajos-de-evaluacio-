function numerofactorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * numerofactorial(n - 1); 
}


console.log(numerofactorial(6)); 





function numerofibonacci(n) {
    if (n === 0) {
        return 0; 
    }
    if (n === 1) {
        return 1; 
    }
    return numerofibonacci(n - 1) + numerofibonacci(n - 2); 
}


console.log(numerofibonacci(7)); 




function revertirtexto(texto) {
    if (texto === "") {
        return ""; 
    }
    return texto.charAt(texto.length - 1) + revertirtexto(texto.slice(0, -1)); 
}


console.log(revertirtexto("Hola"));