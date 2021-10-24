function toggleSection() {
   const demo = document.getElementById("operacionesContenedor");
   if (!demo.style.display || demo.style.display === "none") {
   demo.style.display = "block";
   document.getElementById("togglebloque").textContent = "Ocultar operaciones";
 }  else {
   demo.style.display = "none";
   document.getElementById("toggleBloque").textContent = "Mostrar operaciones";
 }
}
     
function sumar() {
    var numero1 = document.getElementById("myNumber1").value;
    var numero2 = document.getElementById("myNumber2").value;
    var resultado = parseInt(numero1) + parseInt (numero2);
    validarVacios(resultado, "suma");
}
function restar() {
    var numero1 = document.getElementById("myNumber1").value;
    var numero2 = document.getElementById("myNumber2").value;
    var resultado = numero1 - numero2;
    validarVacios(resultado, "resta");
}
function multiplicar() {
    var numero1 = document.getElementById("myNumber1").value;
    var numero2 = document.getElementById("myNumber2").value;
    var resultado = numero1 * numero2;
    validarVacios(resultado,"resta");
}

function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}
function imprimirMensaje(op, res) {
    var mensaje = "El resultado de la " + op + " es: " + res;
    document.getElementById('result').textContent = mensaje;

} 