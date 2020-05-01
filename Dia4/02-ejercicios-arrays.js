//algoritmo
// para depirle al usuario el ingreso de N notas
// finalmente, calcular el promedio de todas las notas

//let n = +prompt("¿Cuantas notas va a ingresar joven?");

let i = 0;
let sumatoria = 0;
let ingresar = true;

//while (i < n) {
while(ingresar === true) {
    let x = +prompt(`Ingrese la nota ${i + 1}`);
    if (x === -1) {
        ingresar = false;
    } else {
        sumatoria = sumatoria + x;
    }
    


    i++;
}

console.log( `Promedio de notas => ${sumatoria/(i-1)}`)