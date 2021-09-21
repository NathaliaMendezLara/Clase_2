

//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

primerNumero= prompt("ingresa un numero");

primerNumero = parseInt(primerNumero);

if(primerNumero > 1000){
    alert("El numero que ingresaste es mayor a 1000. Escribe uno nuevo")
}

//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
saludo= prompt("ingresa un saludo");



if(saludo == "Hola"){
    alert("ingresaste el saludo correcto! Bienvenid@")
}


//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

let numero =prompt("ingresa el numero que mas te guste");
let numeroA ="10";
let numeroB = "50";

numero = parseInt(numero);
numeroA = parseInt(numeroA);
numeroB = parseInt(numeroB);

if(numero < numeroA){
    console.log("Es incorrecto el numero ingresado");
}
else if(numero =>numeroA){
    console.log("Es correcto el numero ingresado");
}
else if(numero <= numeroB){
    console.log("Es correcto el numero ingresado");
}

else(numero > numeroB)
    {console.log("Es incorrecto el numero ingresado");
    alert("El numero ingresado esta dentro del parametro correcto. Felicidades! ");
}
