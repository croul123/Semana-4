//tarea 5.8

let vector1 = [];
let vector2 = [];



for (i = 0; i < 5; i = i + 1) {

    datos =+prompt("ingrese sus datos")
    vector1.push(`${datos}`);
    if( i<4){
    vector2.push(`${datos}`);
    
    
    }

}

if ( i = 4 ){

    vector2.splice(0, 0, `${vector1[i]}`);

}

console.log(`${vector2}`)