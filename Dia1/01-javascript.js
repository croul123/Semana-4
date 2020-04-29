//variables

// debugger=> detiene la aplicacion en la linea en que se ubica 
// luego paso a paso (linea a linea)la aplicacion es depurada
//debugger;

// las variables solo se declaran una sola vez
// despues, solo se las usa
// let =>se antepone a la variable para declararla
let a = 45;
let b = 90;
let c = 0;

// asignando una variable

c = a + b;
// console.log()=> sirve para imprimir contenido en la consola
console.log(c);

//asignacion de una misma variable con modificacion
c = c + 8;
console.log(c);

// tipos de datos 
// solo hay 3 1.- booleanos, 2.- numericos y 3.-string

let nombre = "jorgito";
let sueldo = 950.49;
let visto = true;
let soltero = false;

console.log(nombre);
console.log(sueldo);
console.log(visto);
console.log(soltero);

//Operaciones aritmeticas variables numericas
// +suma
//-resta
//( / )division
//* multiplicar

c = (sueldo *2) + (sueldo * 10 / 100);

// % modulo o residuo de una division entera

let numero1 = 20;
let nuemro2 = 3;

let modulo = numero1 % nuemro2;

console.log(modulo);

//concatenar => juntar o unir :
// string + string 
// numerico + numerico 
// string + numerico
 
let alfa = "lorem ipsum";
let numerico = 123;
let alfaNumerico = alfa + numerico;
console.log(alfaNumerico);


let direccion = "calle blondell"
let numero = 105;

let info = direccion + "" + numero;

console.log(info);


console.log("Mi direccion es: " + info);
