// declarar un conjunto de nombres
// conocido como "array"
const nombresPersonas = [
  "Jose Alfredo",
  "Pablito Ruiz",
  "Cristian",
  "Macarena Massiel",
  "Francisco Ruiz",
  "Antonio David",
];
// array 2
const nombresCantantes = [
  "Jose Alfredo el Pollo Fuentes",
  "Karen Paola",
  "Massiel de España",
  "Pablito Ruiz",
  "Ricardo arjona",
];

// recorrer los nombres de personas con un iterador llamado "for"
for (let i = 0; i < nombresPersonas.length; i++) {
  // acceder a un nombre del array ubicado en la posición i
  const nombre = nombresPersonas[i];
  console.log("nombre:", nombre);

  // revisar si el nombre coincide con el de algún canntante famoso
  // la función map recorre un arreglo, similar a un for
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  nombresCantantes.map((cantante) => {
    // funcion includes devuelve verdadero si lo que busca existe: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    // el operador if ejecuta lo que hay dentro de {} si la condición es verdadera
    if (cantante.includes(nombre)) {
      console.log(nombre, "es nombre de cantante");
    }
  });
}

// Desafio hacer que el código encuentre a la cantante Massiel de España en los nombres de personas
