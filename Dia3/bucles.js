// bucles o estructuras repetitivas

// while - mientras

let i = 0;

while (i<  10) {
    console.log(`Vuelta ${i+1}`);
    i = i + 1;
}

console.log(`el ultimo valor de i= ${i} `);




// recorrer un arreglo con el sabroso 

let notas = [4, 3, 6, 8, 10, 11, 1];
let sumatoria = 0;
let c = 0;

while ( c < notas.length) {
    sumatoria = sumatoria + notas[c];
   
    c += 1;
    // esto indica que se esta incrementando en una unidad como decir c= c+1
}

console.log( `Promedio = ${(sumatoria / notas.length).toFixed}`);