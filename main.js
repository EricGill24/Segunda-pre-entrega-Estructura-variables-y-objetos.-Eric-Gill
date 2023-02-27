let nombre = prompt("Ingrese su nombre...");

alert("Hola " + nombre + "! bienvenido a esta calculadora básica.")

console.log("Nombre: " + nombre)

let numero1=prompt("Ingrese un número")
while(isNaN(numero1)){
    alert("Caracter/es Inválido/s");
    numero1=prompt("Ingrese nuevamente un número");
}
let numero2=prompt("Ingrese un segundo número")
while(isNaN(numero2)){
    alert("Caracter/es Inválido/s");
    numero2=prompt("Ingrese nuevamente un segundo número")
}

console.log("Número 1: " + numero1)
console.log("Número 2: " + numero2)

let operacion = prompt("Ingrese la ecuación que desea realizar: sumar, restar, dividir o multiplicar");

console.log("Operación:" + operacion)

let resultado=0
switch(operacion){
    case "sumar":
        resultado = parseInt(numero1)+parseInt(numero2);
        alert("El resultado es: " + resultado);
        break;
    case "restar":
        resultado =  parseInt(numero1)-parseInt(numero2);
        alert("El resultado es: "+resultado);
        break;
    case "dividir":
        resultado = parseInt(numero1)/parseInt(numero2);
        alert("El resultado es: "+resultado);
        break;
    case "multiplicar":
        resultado = parseInt(numero1)*parseInt(numero2);
        alert("El resultado es: "+resultado)
        break;
    default:
        alert("Esa ecuacion no existe, intente nuevamente!");
        break;
}
console.log("Resultado:" + resultado)
