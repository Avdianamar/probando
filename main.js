/*var nombre = "Diana"; // variable
var apellido = "Romero";
console.log(nombre + apellido); // impresion en consola

const planeta = "Tierra"; // constante

// strings
var cadena = "Andrea";
cadena = 'Andrea';
cadena = 'Andrea "Andy" Sanchez';
cadena = "Andrea 'Andy' Sanchez";
cadena = "Andrea \"Andy\" Sanchez";

console.log(cadena);

//Number
var numero = 15;
numero = Infinity;
numero = NaN; //Not a Number
numero = 2.2e+20; //notacion cientifica [2.2 * (10^ 20)]
numero = 0.012;
numero = -0.012;
console.log(numero)

//Boolean
var activo = true; // solo puede recibir true o false
activo = false;
console.log(activo);

//undefined
var undefined; //se refiere a variables sin valor por definir
console.log(undefined);

//Null
var nulo = null; //se refiere a una variable que no se le asigna valor
console.log(nulo);

//operador % (modulo) retorna el residuo de una division
var modo = 8 % 2 //Esto nos regresa un 0, porque el 8 es multiplo de 2
modo = 7 % 2 //Esto nos regresa un 1, porque 7 entre 2 nos deja con un 3 entero y sobra 1

var dineroEnTarjeta = 0;
if (dineroEnTarjeta > 0) {
    console.log('Felicidades, tienes dinero');
} else {
    console.log('Que mal, no tienes dinero')
}

function saluda(nombre, edad, ciudad) {
    console.log("Hola " + nombre + " tu edad es de " + edad + " y vives en " + ciudad)
}

saluda("Diana", 29, "Curumani");
saluda("Jorge", 40, "Curumani");

var miEfectivoDisponible = 200;
var precioProducto = 100;

/* if(miEfectivoDisponible >= precioProducto){
    console. log("Puedes comprar este producto");
}else if(miEfectivoDisponible === 0){
    console. log("No tienes efectivo, utiliza una tarjeta")
} else{
    console. log("No te alcanza para comprar este producto");
}*/

/*if (miEfectivoDisponible <= precioProducto || miEfectivoDisponible === 0) {
    console.log("No te alcanza para comprar este producto o no tienes efectivo. Utiliza una tarjeta")
}

switch (miEfectivoDisponible){
    case 100:
        console. log("Tienes 100 pesos");
        break;
    case 200:
        console. log("Tienes 200 pesos");
        break;
    case 300:
        console. log("Tienes 300 pesos");
        break;
    default:
        console. log("No coincide con ningun valor")
}

var j = 10
for(var i = 50; i <= 100; i++, j++){
    console. log('imprimir ' + i, "imprimir " + j);
}

var contador = 10;
while (contador > 0){
    console. log(contador);
    contador--;
}

var continuar = "S";
while (continuar.toLocaleLowerCase() === "s"){
    const operacion = prompt('selecciona el tipo de operacion (-, +, *, /)')
    const num1 = prompt('ingresa el primer numero');
    const num2 = prompt('ingresa el segundo numero');
    var resultado;

    switch(operacion){
        case '-':
            resultado = Number(num1) - Number(num2);
            break;
        case '+':
            resultado = Number(num1) + Number(num2);
            break;
        case '*':
            resultado = Number(num1) * Number(num2);
            break;
        case '/':
            if(Number(num2) === 0){
                resultado = "no es posible hacer una division entre 0.";
            }
            resultado = Number(num1) / Number(num2);
            break;
    }
    console. log("tu resultado es " + resultado)
    continuar = prompt('Desea continuar? s/n')
}*/

// EJERCICIO PROMEDIO
/*
const alumnos = [
    {
        nombre: "Fran",
        calificaciones: [9, 8, 10, 5, 5]
    },
    {
        nombre: "Diana",
        calificaciones: [7, 8, 9, 6, 5]
    },
    {
        nombre: "Jorge",
        calificaciones: [10, 4, 9, 8, 4]
    },
    {
        nombre: "Robi",
        calificaciones: [10, 9, 10, 5, 9]
    }
]

/*funcion vacia o funcion void
function saludar(){
    console. log('Hola Mundo');
}*/
/*
// funcion que regresa un numero
function sacarPromedio(arregloCalificaciones){
    let promedio = 0;
    for (let i = 0; i < arregloCalificaciones.length; i++) {
        //promedio = promedio + arregloCalificaciones[i];
        promedio += arregloCalificaciones[i];
    }
    promedio = promedio / arregloCalificaciones.length;

    return promedio;
}

function evaluaAprobacion(calificacion){
    if(calificacion <= 5){
        return "no aprobó"
    }
    else{
        return "si aprobó"
    }
}

(function () {
    alumnos.forEach(function (alumno){
        const promedioAlumno = sacarPromedio(alumno.calificaciones);
        const  aprobacionAlumno = evaluaAprobacion(promedioAlumno);

        console.log("Promedio de " + alumno.nombre + " " + promedioAlumno);
        console.log(alumno.nombre + " " + aprobacionAlumno);
    })
})()*/

// EJERCICIO NUMEROS PARES

function numerosPares( ){
    var cont = 0;
    var numPares = numero;
    for(var i = 1; cont < numPares; i++){
        if(i%2===0){
            console. log(i);
            cont++;
        }
    }
}

numerosPares(prompt('cuantos numeros pares quieres tener?'));