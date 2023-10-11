// function saludarAhoraMismo(){
//     return 'hola, saludo ahora mismo'
// }

// function saludarMasTarde(){
//     var saludo = 'hola';
//     setTimeout(function(){
//         console.log(saludo)
//     }, 3000);
// }

// saludarMasTarde()
// saludarAhoraMismo()
// console.log(4 + 5);

// // ? sintax parser


// ? Contexto de ejecución

// var x = 10;


// function foo(){
//     var y = 20;
    

//     console.log(x);//10
//     console.log(y);//20
//     console.log(z);

//     function hola(){
//         var z = 15
//         console.log(z);
//     }
//     hola()
// }

// foo()
// console.log(x); //10
// console.log(y); //20? undefined? 

// ? scope
// var global = 'global';
// function a(){
//     console.log(global); //global
//     global = 'Hello';
//     var nombre = 'Victor'
//     function c(){
//         console.log(nombre);
//         nombre = 'Tomas'
//         console.log(nombre);
//     }
//     console.log(nombre);
//     c()
//     console.log(nombre);
// }

// function b(){
//     var global = 'Chau';
//     console.log(global); //chau
//     // console.log(nombre);
// }

// a();
// b();
// console.log(global); //global? chau

/*
* var -> su alcance o ámbito es global o de función(local)...las variables declaradas con var se pueden volver a declarar y a modificar.

* let -> cuando nosotros declaramos una variable utilizando let, vive localmente, es decir, su alcance es local, vive en su bloque de código.

* const -> su alcance el local,declara variables que son inmutables: no se puede modificar, tampoco se puede reasignar otro valor. (cuando los valores sabemos que no van a cambiar), se deben declarar e inicializar en la misma línea

Esto a mi me sirvio :Las declaraciones var tienen un ámbito global o un ámbito función/local, mientras que let y const tienen un ámbito de bloque.
Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let pueden ser modificadas, pero no re-declaradas; las variables const no pueden ser modificadas ni re-declaradas.
Todas ellas se elevan a la parte superior de su ámbito. Pero mientras que las variables var se inicializan con undefined, let y const no se inicializan.
Mientras que var y let pueden ser declaradas sin ser inicializadas, const debe ser inicializada durante la declaración.
*/


// var saludar = 'hola'
// var hora = 9;

// if(hora > 12){
//     var saludar = 'buenas tardes'
// }

// console.log(saludar);//'hola'

// let saludar = 'hola'
// let hora = 13

// if(hora > 12){
//     let saludar = 'buenas tardes'
// }

// console.log(saludar); // 'hola' - 'buenas tardes'

// let chau;
// var hola;
// const adios = 'adios';

// adios = 5

// ? hoisting

bar()
function hola(){
    console.log(hola);
}
hola()
let nombre = 'Ignacio'

console.log(foo);//undefined
var foo = 'hola, me declaro';
function bar(){
    console.log('soy una función'); //soy una función
}

let bar = function(){
    console.log('soy una función'); // undefined
}

// ? this
// var frutas = {
//     acida:'limon',
//     sabor:function(){
//         console.log('el sabor del helado es ' + this.acida);
//     }
// }

// frutas.sabor()

// ? Pila de ejecución
// function hola(){
//     console.log('hola');
//     console.log('terminó la función hola');
// }

// function cohorte(valor){
//     console.log(valor);
//     console.log('terminó la función cohorte');
// }

// function saludo(){
//     hola();
//     cohorte('FT44B')
//     console.log('terminó la función saludo');
// }

// saludo()

// ? funciones

// function persona(objeto){
//     console.log(objeto.nombre);
// }

// var obj = {
//     nombre:'Jhon'
// }

// persona(obj)

// function persona(valor){
//     console.log(valor.nombre);
// }

// function datos(){}

// datos.nombre = 'Michael'

// persona(datos)

// valor y referencia
var a = '10';
var b = 'azul';
var c = a // 10
console.log(c);

a = 'hola'
console.log(c);

var arr = [1,2,3]

var arr2 = arr


arr.push(4)

console.log(arr2);