//problema 3.2

let HT = prompt("horas trabajadas");
let PH = prompt("pago por hora");
let PS = HT * PH;
let PD = 40 * PH +2 * PH * (HT -40);

if (HT <= 40) {
    console.log( "tu pago es " + PS)
    
} else { 
    if ( HT > 40) {
        console.log( "Tu pago es " + PD)
    }
    
}

//problema 3.3

let plata = prompt("Cuanto tienes");
let T = "tarjeta"
let C = "chocolate"
let F = "Flores"
let A = "anillo"

if( plata <= 10) {
    console.log( "Tu mejor regalo es una " + T)

}
if( plata > 11 && plata <= 100) {
    console.log( "Tu mejor regalo es una caja de  " + C)

}
if( plata > 101 && plata <= 250) {
    console.log( "Tu mejor regalo son " + F)

}
if( plata >251 ) {
    console.log( "Tu mejor regalo es un " + A)

}

//problema 3.4

let horas = prompt("Cuantas horas se quedo");
let x = horas *5;
let y = 2*5 + (horas-2) *4;
let z = 2*5 + 3*4 + (horas-5) *3;
let u = 2*5 + 3*4 + 5 *3 + (horas-10) *2;



if( horas <= 2) {
    console.log( "Tu pago es " + x)

}
if( horas > 2 && horas <= 5) {
    console.log( "Tu pago es  " + y)

}
if( horas > 5 && horas <= 10) {
    console.log( "Tu pago es " + z)

}
if( horas > 10 ) {
    console.log( "Tu pago es " + u)

}

//problema 3.8

let Antiguedad = prompt("Cuantos años trabaja en la empresa");
let sueldo = prompt("Cuanto es su sueldo");
let bono1 = ""
let bono2 = ""

if ( Antiguedad >2 && Antiguedad < 5) {
    bono1 = sueldo * 0.2;
} else {

    if ( Antiguedad > 5 ) {
        bono1 = sueldo * 0.3;
    }
    
}
if (sueldo <= 1000) {
    bono2 = sueldo * 0.25;

    if( bono1 > bono2 ){
        console.log("Tu bono es " + bono1);

    }
    else{
        if( bono1 < bono2){
            console.log("Tu bono es " + bono2);
        }
    }
    
} 
if (sueldo > 1000 && sueldo <= 3500) {
    bono2 = sueldo * 0.152;
    if( bono1 > bono2){
        console.log("Tu bono es " + bono1);

    }
    else{
        if( bono1 < bono2){
            console.log("Tu bono es " + bono2);
        }
    }
    
} 
if (sueldo > 3500 ) {
    bono2 = sueldo * 0.1;
    if( bono1 > bono2){
        console.log("Tu bono es " + bono1);

    }
    else{
        if( bono1 < bono2){
            console.log("Tu bono es " + bono2);
        }
    }
    
} 

//3.9

let seguro = +prompt("Que tipo de seguro queire ");

let bb = prompt("Usted BB ");
let lentes = prompt("Usted usa lentes ");
let enfermedad = prompt("Usted tiene alguna enfermedad de diabetes o cardiaca ");
let anios = prompt("Cuantos años tiene ");

if (seguro = "Amplia") {
    
    seguro1 = 1200
} 

if (seguro = "Daño") {
    
    seguro1 = 950
}
console.log(seguro1)
