// switch case
// estructura que sirve para evaluar 
// varios posibles valores para una variable 


let dia = 1;
let rpta = "";

//() se coloca la varible a evaluar
switch (dia) {
    case 1:
        rpta = "Lunes";
        break;
    case 2:
        rpta = "Martes";
        break;
    case 3:
        rpta = "Miercoles";
        break;
    case 4:
        rpta = "Jueves";
        break;
    case 5:
        rpta = "Viernes";
        break;
    case 6:
        rpta = "Sabado";
        break;
    case 7:
        rpta = "Domingo";
        break;
    default:
        rpta = "Error";
}

console.log(rpta);

//Ejercicio
// El usuario ingresa 5 posibles nombres de colores 
// re, blu, white, black o gren
// el sistema de imprimir el valor hexadecimal de dicho color
// color

let color = prompt("ingrese color")

switch (color) {
    case `red`:
        rpta = " #ff0000";
        break;
    case `blu`:
        rpta = " #0000ff";
        break;
    case `white`:
        rpta = " #ffffff ";
        break;
    case `black`:
        rpta = " #000000 ";
        break;
    case `gren`:
        rpta = " #008000 ";
        break;
    default:
        rpta = "no se"

}
console.log(rpta)