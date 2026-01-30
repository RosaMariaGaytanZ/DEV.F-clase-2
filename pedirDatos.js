console.log('hola me llamo Rosa');
console.log('como te llamas');

let nombre = prompt('como te llamas');
console.log(nombre);
//document.write(nombre);
alert(nombre)

let fecha = prompt('cuando es tu cumple');
console.log(fecha)
//document.write(fecha);
alert(fecha)

let mascotas = prompt('cuantas mascotas tienes')
console.log(mascotas);
//document.write(mascotas);
alert(mascotas);

// preguntas cuantos perros tienes
let perros = prompt ('cuantos perros tienes');
console.log(perros);
// preguntas cuantos gatos
let gatos = prompt ('cuantos gatos tienes');
console.log(gatos);

//ParsInt mas tolerable, util cuando el usuario escribe texto
perros = parseInt(perros);
gatos = parseInt(gatos);

let mascota =  gatos + perros;
console.log('En total tienes ' + mascota + ' mascotas');
//Mostrar como respuesta: Tienes en total x mascotas 


//Number es mas esctricto y falla si hay texto mezclado.
let hermanos = Number(prompt('cuantos hermanos tienes...'));
let hermanas = Number(prompt('cuantos hermanas tienes...'));

let totalH = hermanos + hermanas;

console.log('En total tienes ' + totalH + ' hermanos')

