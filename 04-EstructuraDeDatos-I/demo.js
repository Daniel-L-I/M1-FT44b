//  ? Características de la recursión:
// * Función que se llama a sí misma
// * El argumento de la función retornada debe ser diferente a la de la función padre
// * Caso base

// ? Ejemplo 1
// ? Sumar los números de un arreglo
function sumarArreglo(arreglo) {
    // console.log(arreglo);// 3
    if (arreglo.length === 0) return 0;
    else {
        const primerNumero = arreglo[0]
        // console.log(primerNumero);
        const restoNumeros = arreglo.slice(1)
        // console.log(restoNumeros);
        return primerNumero + sumarArreglo(restoNumeros)
    }
    // return sumarArreglo(arreglo)
}


// console.log(sumarArreglo([5,8,9]));


// ejemplo 2
function sumar(num) {
    if (num >= 10) {
        return num
    }
    return sumar(num + 2)
}
console.log(sumar(2));



// SET- no se pueden repetir elemento

let arrglo = []
console.log(typeof arrglo);

let array = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7]
let set = new Set(array)
console.log(set);
console.log(typeof set);


// STACK (PILA)--sitema LIFO(Last In First Out (Ultima en entrar, primeras en salir))


// let stack= []

stack.push(2)
stack.push(12)
stack.push('jose')
stack.push('dani')
console.log(stack)

stack.pop()
console.log(stack);  

stack.unshift('cane')
console.log(stack);


class Stack {
    constructor() {
        this._stack = []
    }

    longitud() {
        return this._stack.length
    }
}


Stack.prototype.save = function (value) {
    this._stack.push(value)
}
Stack.prototype.delete = function () {
    this._stack.pop()
}

Stack.prototype.swoStack = function () {
    return this._stack
}
const stack = new Stack()

stack.save('dani')
stack.save('mica')
stack.save('da')
stack.save('ni')
stack.save('ani')
stack.save('i')
stack.save('dani')
console.log(stack);
stack.delete()
console.log(stack);
console.log(stack.longitud());
stack._stack.unshift('chau')
console.log(stack);





