
let i = 0;
let sumatoria = 0;
let x = {}


do {
    let x = +prompt(`Ingrese la nota ${i + 1} o -1 para salir`);
    if (x !== -1) {
        sumatoria = sumatoria + x;
        i++;
    }
}

while (x !== -1);



console.log(`Promedio de notas => ${sumatoria / i}`);