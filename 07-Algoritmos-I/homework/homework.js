'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // * Almacenar Los factores
  let array = [1]
  // * El numero primo mas chico
  let div = 2

  while (num > 1) {
    if (num % div === 0) {
      array.push(div)
      num /= div
    } else {
      div++
    }
  }
  return array;
}
// const numeros = 180;   
// const array = factorear(numeros);
// console.log(array);


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let n = array.length
  for (let i = 0; i < n - 1; i++) { // *  for i \ control el numero de pasadas
    for (let j = 0; j < n - 1; j++) { // * for j \ realiza las comparacione y los intercambios
      if (array[j] > array[j + 1]) { // * Si es mayor lo intercabia con el sigiente 
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
// var arr = [64, 34, 25, 12, 22, 11, 90];
// bubbleSort(arr);
// console.log(arr);

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  array.forEach((element, i) => { //* ->iteramos a cada elemento 
    for (let j = i - 1; j >= 0 && array[j] > element; j--) { // * 
      array[j + 1] = array[j] //* ->Si el elemento actual (element) es menor que el elemento en la posición j,
      // * movemos el elemento en la posición j una posición a la derecha.
      array[j] = element //* -> Luego, colocamos el elemento actual (element) en la posición correcta (j + 1).
    }
  });
  return array
}
// const arrayOrdenado = [10,3,7,1,9,29];
// const ordenados = insertionSort(arrayOrdenado);
// console.log(ordenados); // ![1,3,7,9,10,29]

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex!== i) {
      let element = array[i]
      array[i] = array[minIndex]
      array[minIndex]= element
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
