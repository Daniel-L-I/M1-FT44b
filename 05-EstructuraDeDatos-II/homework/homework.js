'use strict';

const { get } = require("@11ty/eleventy/src/TemplateCache");
const { Carousel } = require("bootstrap");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}
function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let nodo = new Node(value);
  let current = this.head;
  // if (current === null) { // ! otra forma masvieja
  if (!current) {
    this.head = nodo;
    return nodo;
  }
  // while (current.next !== null) { // !otra forma 
  while (current.next) {
    current = current.next;
  }
  current.next = nodo;
  return value;
}

// ? remove
LinkedList.prototype.remove = function () {
  let current = this.head

  // *lista vacia
  if (!this.head) {
    return null
  }

  // *un solo nodo
  if (current.next) {
    this.head = null
    return current.value
  }

  // *mas de un nodo
  else {
    while (current.next.next) {
      current = current.next;
    }
    let lastValue = current.next.next;
    current.next = null
    return lastValue;
  }
};

LinkedList.prototype.search = function (valor) {
  let current = this.head;

  while (current) {
    if (typeof valor !== 'function') {
      if (valor === current.value) {
        return current.value
      } else if (valor(current.value)) {
        return current.value
      }
      current = current.next
    }
    return current
  }
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)
 
La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = []
  this.nimBuckets = 35;
}

HashTable.prototype.hash = function (strings) {
  let acumulador = 0
  for (let i = 0; i < strings.length; i++) {
    acumulador = acumulador + strings.charCodeAt(i)
  }
  return acumulador % this.nimBuckets
}
// *ingresa nnuevos datos
HashTable.prototype.set = function (value, key) {
  if (typeof key !== 'string') throw TypeError('Keys must be strings')
  let position = this.hash(key)
  // ? Manejar colisiones
  if (!this.buckets[position]) {
    this.buckets[position] = {}
  }
  // ? Crear la propiedad del ejemplo {instructora: 'Ani'}
  this.buckets[position][key] = value
}

// * informacion de busqueda 
HashTable.prototype.get = function (Key) {
  let pocicion = this.hash(Key)
  return this.buckets[position][Key]
}

// *Verificar el dato esta guardado
HashTable.prototype.hasKey = function (key) {
  // ! Forma 1 
  // let checkInfo = this.get(key)
  // if (checkInfo) {
  //   return true
  // }
  // return false
  // ! Forma 2
  let pocicion = this.hash(key)
  return this.buckets[pocicion].hasOwnProperty(key)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
