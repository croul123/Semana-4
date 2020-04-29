//condicionales
//comparadores aritmeticos 
// > mayor
// < menor
// == igual de comparacion
// != diferente
// >= mayor o igual
// <= menor o igual 


let  valor = 441;
let modulo = valor % 2;
if ( valor === 0) {

// si la pregunta da una respuesta verdadera
//el codigo interno, es el que se va a ejecutar

console.log("El numero " + valor + " es par")}
else {
    console.log( "el numero " + valor + " es inpar")
}
//para ya no colocar + se puede poner (`El numero ${valor} es par` ), en javascrip se le llama plantillas

    console.log(`////////////////////////////////////////////`);
    
let precio = 80;

if (precio > 100){
    console.log( `Total a pagar ${precio - (precio*0.1)}`)}
    else 
    {console.log( `Total a pagar ${precio}`)};

    console.log(`//////////////////////////////////////////////////`)

    /OPERADORES LOGICOS

    // && => Y
    // || => O
    // ! =>  NEGACION

    let precioproducto = 1000;
    let genero = "Varon"

    if ((precioproducto > 500) && (genero === "Varon")) {
        console.log("Promocion Valida");
        conosle.log(`Total ${precioproducto * 0.9}`);
    }
     else {
        console.log(`Total ${precioproducto}`)
    }

   // Ejercicio 4
   // calcular si un año es bisiesto si es divisible por 4, excepto aquel divisble
   // o que el anio sea divisible por 400 simplemente

   // ejercicio 6
   // algoritmo para hallar el mayor de 3 numeros 
   // teniendo en cuenta que los 3 son diferentes 

   let a = 34;
   let b = 64;
   let c = 150;

   if (  a > b && a > c ) {
       console.log(`El mayor es ${a}`)
   }





