'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  let element = array[0];
  let min = [];
  let max = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < element) {
      min.push(array[i]);
    } else {
      max.push(array[i]);
    }
  }
  // *ordenado resultante
  return [...quickSort(min), element, ...quickSort(max)];
}
const arr = [3, 6, 8, 10, 1, 2, 1];
const oredenar = quickSort(arr);
console.log(oredenar);
const arr2 = [10, 2, 1, 6, 5, 2, null, 9, 0, -1];
const oredenar2 = quickSort(arr2);
console.log(oredenar2);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
  //okey probemos ahora
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}
// const array = [38, 27, 43, 3, 9, 82, 10];
// const sortedArray = mergeSort(array);
// console.log(sortedArray);// * [3,9,10,27,38,43,82]
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
