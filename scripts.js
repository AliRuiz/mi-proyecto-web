function toggleSection() {
    document.getElementById("toggleBloque").textContent = 'Mostrar Operaciones';
    var operacionesContenedor = document.getElementById("operacionesContenedor");
    if (operacionesContenedor.style.display === "none") {
        operacionesContenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = 'Mostrar Operaciones';
    } else { 
        operacionesContenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = 'Ocultar Operaciones';
    }
}
function sumar(myNumber1,myNumber2) {
    return myNumber1 + myNumber2;
}
function restar(myNumber1,myNumber2) {
    return myNumber1 - myNumber2;    
}
function multiplicar(myNumber1,myNumber2) {
    return myNumber1 * myNumber2;
    
}
function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}
function imprimirMensaje(op, res) {

} 