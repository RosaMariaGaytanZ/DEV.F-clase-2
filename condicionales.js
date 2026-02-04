let edad = 20;
let tieneINE = true

if(edad >= 18) {
    console.log('Eres mayor de edad') //se ejecuta si es true
}else {
    console.log('Eres menor de edad') // se ejecuta si es false
};

let calificacion = 9;

if(calificacion >= 9) {
    console.log('Eres increible')
} else if (calificacion >= 6){
    console.log('pansaste ... ')
} else{
    console.log('Reprobaste...')
}



if (edad >= 18 && tieneINE){
    console.log('puedes votar')
}else{
    console.log('No puedes votar')
}

let numero = prompt ('ingresa un numero');
numero = parseInt(numero);

//si queremos preguntar si es divisible o no entre 2

if (numero % 2 === 0){
    console.log('Es divisible entre 2')
}else{
    console.log('No es divisible entre 2')
}

let esPremium = false;
let totalCompra = 1200;
let esFinDeSemana = true;

if (esPremium || (totalCompra > 1000 && esFinDeSemana)){
    console.log('Descuento aplicado')
}else{
    console.log('No aplica el descuento')
}