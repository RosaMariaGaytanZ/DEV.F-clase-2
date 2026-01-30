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
