// arreglos
let marcas = ["nissan" , "mazda" , "kia" , "toyota" , "mitsubishi" , "ford",  "mustang" , "pontiac" ];
console.log(marcas);

let modelos = ["picanto" , "cx-3" , "compass" , "auris"];

console.log(modelos[2]);


//arreglo vacio

let sinElementos = [];

// ingresando elementos en la posicicion especifica
sinElementos[0] = false;
sinElementos[1] = true;
console.log(sinElementos);

// aalgunas propiedades de los arreglos 
//  length => obtiene la cantidad de elemento que tiene el arreglo

console.log(`Tamanio del arreglo modelos => ${modelos.length}`);
console.log(`Tamanio del arreglo sinElementos => ${sinElementos.length}`);

// push(elemento)  => inserta un elemento al final de un arreglo

marcas.push("audi");
console.log(marcas);

// para insertar en o cambiar en una posicion especifica

marcas.splice(3, 0, "datsun");
console.log(marcas);


let arreglos = [90, 2, 30, 4, 5, "jorge", true, ["azul", "rojo"]];
console.log(arreglos[7][1]);

//como imprimir el ultimo elemneto de un arreglo
// sin usar un numero como posicion

console.log(arreglos[arreglos.length - 1])
// el comando arreglos.length nos da la cantidad de elemetos 
