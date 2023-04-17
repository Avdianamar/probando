var nombre = "Diana"; // variable
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

var miEfectivoDisponible = 0;
var precioProducto = 100;

if(miEfectivoDisponible >= precioProducto){
    console. log("Puedes comprar este producto");
}else if(miEfectivoDisponible === 0){
    console. log("No tienes efectivo, utiliza una tarjeta")
} else{
    console. log("No te alcanza para comprar este producto");
}