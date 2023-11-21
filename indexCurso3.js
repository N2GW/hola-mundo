//operadores lógicos

console.log("requisitos para entrar a una disco");
var edad = 18;
var carnet = true;

//ejemplo AND

console.log (edad >=18 && carnet==true);

console.log("persona no trae carnet");

var edad = 18;
var carnet = false;

//ejemplo AND

console.log (edad >=18 && carnet==true);

//ejemplo OR

console.log("persona trae carnet o es mayor 18");

console.log (edad >= 18 || carnet == true);

console.log("¿como hacer que false tome el valor contrario?");

var edad = 18;
var carnet = !false;

console.log(carnet);
