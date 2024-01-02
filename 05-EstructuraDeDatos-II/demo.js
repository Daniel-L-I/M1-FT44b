// Extructura
class Node {
    constructor(valor) {
        this.value = valor;
        this.next = null;
    }
}

class Lista {
    constructor() {
        this.head = null;
        // _:una cuerda privada
        this._length = 0;
    }
}

let nodo = new Node('Cane')
console.log(nodo);
let nodo2 = new Node('Fer')
nodo.next = nodo2
console.log(nodo);

// Metodo add:agregar
Lista.prototype.add = function (value) {
    let nodo = new Node(value);
    let current = this.head;

    // Si la lista esta vacia
    if (current === null) {
        this.head = nodo;
        this._length++;
        return nodo;
    }
    // Si la lista tiene uno o mas nodos
    while (current.next) {
        current = current.next
    }
    current.next = nodo
    this._length++
    return nodo;
}
let nuevoLista = new Lista()
console.log(nuevoLista);
nuevoLista.add('dani')
nuevoLista.add('daaa')
nuevoLista

// 
Lista.prototype.getAll = function () {
    let current = this.head;
    // La lista esta vacia
    if (!current) {
        return 'La lista esta vacia';
    }

    let listaPerritos = []
    while (current) {
        console.log(current.value);
        listaPerritos.push(current.value);
        current = current.next;
    }
    return listaPerritos;
}

console.log(nuevoLista.getAll());
nuevoLista.getAll()

// * TABLAS HASH (HASH TABLES)

let persona1 = {
    dni: 123456,
    nombre: 'jose',
    articulos: 'mochila'
}

let persona2 = {
    dni: 79098760,
    nombre: 'dani',
    articulos: 'celu'
}

let persona3 = {
    dni: 121278867777,
    nombre: 'gonza',
    articulos: 'laptop'
}


let locker = []
let lonistudLocker = 30

function HashLocker(dni, nombre) {
    return (nombre.length + dni) % lonistudLocker;
}

let indice1 = HashLocker(persona1.dni, persona1.nombre)
locker[indice1] = persona1.articulos;
console.log(indice1);// *lo guarda en la pocicion 10
console.log(locker);


let indice2 = HashLocker(persona2.dni, persona2.nombre)
locker[indice2] = persona1.articulos;
console.log(indice2);// *lo guarda en la pocicion 14

let indice3 = HashLocker(persona3.dni, persona3.nombre)
locker[indice3] = persona1.articulos;
console.log(indice3);// *lo guarda en la pocicion 2

console.log(locker);

let buscar = HashLocker(persona3.dni, persona3.nombre)
console.log(locker[indice3]);