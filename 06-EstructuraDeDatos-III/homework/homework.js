'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}

// ? size ---> Tamaño del arbol
BinarySearchTree.prototype.size = function () {

   // todo: forma profe
   //! caso base->si la referencia del nodo apunta a nulo
   if (!this.left && !this.right) return 1
   //! Cuando nuestro nodo podre tiene un solo hijo
   if (!this.right) return 1 + this.left.size()
   if (!this.left) return 1 + this.right.size()
   //! Cuando nuestro nodo padre tiene ambos hijos
   return 1 + this.left.size() + this.right.size()


   // todo: forma dani
   // let nodo = 1;
   // if (this.left !== null) {
   //    nodo += this.left.size();
   // }
   // if (this.right !== null) {
   //    nodo += this.right.size();
   // }
   // return nodo;
}

// ! insert ---> 
BinarySearchTree.prototype.insert = function (valor) {

   // Todo: forma de la profe / y de la demo
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

   // Todo: forma de la dani
   // if (valor < this.value) {
   //    if (this.left === null) {
   //       this.left = new BinarySearchTree(valor);
   //    } else {
   //       this.left.insert(valor);
   //    }
   // } else if (valor > this.value) {
   //    if (this.right === null) {
   //       this.right = new BinarySearchTree(valor);
   //    } else {
   //       this.right.insert(valor);
   //    }
   // }
}

// ! contains ---> 
BinarySearchTree.prototype.contains = function (valor) {

   // Todo. forma profe
   if (valor === this.value)return true
   if (valor<this.value) {
      if(!this.left)return false;
      return this.left.contains(valor)
   }
   if (valor > this.value) {
      if(!this.right)return false
      return this.right.contains(valor)
   }

   // Todo. forma Dani
   // // *Se encontró el valor en el nodo 
   // if (this.value === target) {
   //    return true;
   // }
   // // * Buscar en la rama izquierdo
   // if (valor < this.value) {
   //    if (this.left !== null) {
   //       return this.left.contains(valor);
   //    }
   //    // *Buscar en la rama  derecho
   // } else {
   //    if (this.right !== null) {
   //       return this.right.contains(valor);
   //    }
   // }
   // return false;
}

// ! depthFirstForEach ---> Recorrido
BinarySearchTree.prototype.depthFirstForEach = function (order, cb) {
   // Todo: forma profe
   if (order === 'in-order' || !order) {
      this.left && this.left.depthFirstForEach(order, cb);
      cd(this.value)
      this.right && this.right.depthFirstForEach(order, cb)
   }
   if (order === 'pre-order') {
      this.left && this.left.depthFirstForEach(order, cb);
      this.right && this.right.depthFirstForEach(order, cb);
   }
   if (order === 'post-order') {
      this.left && this.left.depthFirstForEach(order, cb);
      this.right && this.right.depthFirstForEach(order, cb);
      cd(this.value)
   }

   // Todo: forma dani
   // if (order === "pre-order") {
   //    callback(this.value);
   // }

   // if (this.left) {
   //    this.left.depthFirstForEach(order, callback);
   // }

   // if (order === "in-order") {
   //    callback(this.value);
   // }

   // if (this.right) {
   //    this.right.depthFirstForEach(order, callback);
   // }

   // if (order === "post-order") {
   //    callback(this.value);
   // }
}

// ! breadthFirstForEach ---> 
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {

   // no terminado// todo:Forma profe
   
   // if (!arr) {
   //    let arr = []
   // }
   cb(this.value)
   this.left && arr.push(this.left)
   this.right && arr.push(this.right)
   arr.length && arr.shift().breadthFirstForEach(cb, arr)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
