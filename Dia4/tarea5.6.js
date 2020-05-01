//tarea 5.6
let Estudiantes = [];
let edadmayor = [];
let Datos = [];


for (i = 0; i < 10; i = i + 1) {
    
    
    Datos[0] = prompt("ingrese su nombre");
    Datos[1] = +prompt("ingrese su edad");

    Estudiantes.push(Datos)
    
    
}
let x = 0;
let y = 1;

while (x < 10 && y < 9 ){
    if(Estudiantes[x][1] > Estudiantes[y][1]){
       
        y = y + 1
    }
    else{
       
        x = x + 1;
        y = y + 1;
    }
    
    console.log(`${Estudiantes[x][0]}`)
    

}


