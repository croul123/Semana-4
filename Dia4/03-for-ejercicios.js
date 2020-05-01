// elaborar un algoritmo }
//al finalizar imprimir a todos los usuarios

let n = +prompt( "cuantos usuarios va a ingresar?");
let personas = [];

for (let i = 0; i < n; i = i + 1){
    let usuario = [];
    usuario[0] = prompt("Ingrese su nombre")
    usuario[1] = prompt("Ingrese su apellido")
    usuario[2] = +prompt("Ingrese su edad")

    personas.push(usuario)

}

for ( let j = 0; j <personas.length; j = j + 1){
    if (personas[j][2] >= 18) {
        
    }
}
