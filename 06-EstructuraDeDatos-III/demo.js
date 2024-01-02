function BinarySearchTree(value) {
    this.value = value
    this.left = null
    this.right = null
}

/*
* Si e(el <rbol es igual al valor que vamos a ingresar){
    ? opcion 1 -- lo enviamos a ala izquierda o a la derecha, lo que deciamos
    ?opcion 2 --> No recibimos valores iguales -> throw "Error"- mensaje: "No valores repetidos"
*}

*Si (el valor a ingresar es menor al nodo del arbol){
    ? si(no hay nodo izquierdo(null)){
        ! el valor que recibimmo lo ubicamos en ese nodo.
    ?}
    ?si no {
        ! aplicamos recurcion, llamando nueva mente al metodo de agregar,no olvidar revalidar con el valor, su caso de corte es cuando un nodo referencia a null.
    ?}
*}

*si (el valor a ingresar es mayor al nodo del arbol){
    ? si(no hay nodo derecha(null)){
        ! el valor que recibimmo lo ubicamos en ese nodo.
    ?}
    ?si no {
        ! aplicamos recurcion, llamando nueva mente al metodo de agregar,no olvidar revalidar con el valor, su caso de corte es cuando un nodo referencia a null.
    ?}
*}
*/

BinarySearchTree.prototype.insert = function (valor) {
    // if (valor === this.value) return 'No recibimos valores repetidos'
    if (valor <= this.value) {
        if (!this.left) {
            let newTree = new BinarySearchTree(valor)
            this.left = newTree
        } else {
            this.left.insert(valor)
        }
    } else {
        if (!this.right) {
            let newTree = new BinarySearchTree(valor)
            this.right = newTree
        } else {
            this.right.insert(valor)
        }
    }
}

BinarySearchTree.prototype.search = function (valor) {
    if (valor === this.value) {
        return this.value
    }
    if (valor < this.value && this.left !== null) {
        return this.left.search(valor)
    }
    if (valor > this.value && this.right !== null) {
        return this.right.search(this.value)
    }
    else {
        return 'El valor no esta guardado en nuestro arbol'
    }
}

let arbol = new BinarySearchTree(9)
arbol
arbol.insert(20)
arbol
arbol.insert(30)
arbol
arbol.insert(10)
arbol
arbol.search(20)
arbol
console.log(arbol.search(10));


