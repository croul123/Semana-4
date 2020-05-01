let numero = [1, 11, -1, 2, 35, -5, 65, -58, 0, 45, -36];
let i = 0;
let vueltas = numero.lenght;

let cpositivos = 0;
let cnegativos = 0;
let cero = 0;

while ( i < vueltas) {
    if ( numero[i] > 0) {
    cpositivos += 1;
    // ++ significa que esta aumentando en uno 
    } else {
        if (numero[i] === 0){
            cero += 1;

        }
        else{
            cnegativos += 1;
        }
    }
    

    i++;
}

console.log(`Positivos => ${cpositivos} `)
console.log(`Negativos => ${cnegativos} `)
console.log(`ceros => ${cero} `)

