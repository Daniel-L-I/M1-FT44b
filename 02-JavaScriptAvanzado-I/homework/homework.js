// Scope & Hoisting

// 1-
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    var x = 10;
    console.log(x);//10
    console.log(a);//8
    var f = function (a, b, c) {
        b = a;
        console.log(b);//8
        b = c;
        var x = 5;
    };
    f(a, b, c);
    console.log(b);//9
};
c(8, 9, 10);
console.log(b);//10
console.log(x);// 1

// 2-
// console.log(bar);// undefined
// console.log(baz);//baz is not defined == error se interumpe porque no exite una variable y corta ahi.
// foo();
// function foo() {
//     console.log('Hola!');// nunca entra porque 
// }
// var bar = 1;
// baz = 2; // 

// 3-
var instructor = 'Tony';
if (true) {// Si es false es Tony 
    var instructor = 'Franco';
}
console.log(instructor); //Franco

//4-
var instructor = 'Tony';
console.log(instructor);//Tony
(function () { /// Es una funcion auto invcando  
    if (true) {
        var instructor = 'Franco';
        console.log(instructor);// Franco
    }
})();
console.log(instructor);//Tony

// 5-
var instructor = 'Tony';
let pm = 'Franco'; // let 
if (true) { 
    var instructor = 'The Flash'; 
    let pm = 'Reverse Flash'; // Este  let vivi solo en el bloque  
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);// The Flash
console.log(pm);// Franco

// Coerción de Datos

6 / "3"   // 2 = Coerción de datos inplicito
"2" * "3"  // 6 
4 + 5 + "px"  // 9px == suma 4+5
"$" + 4 + 5  // $45 == concatena 
"4" - 2  // 2 
"4px" - 2  // NaN
7 / 0  // Infinity
{}[0]  //  node=undefined = navegador=[0] 
parseInt("09")  // 9
// Namber('09') // 9
parseInt('09abs')//9= elimina abc y 0 
// Namber('09abc') //NaN
parseInt('abc09')//NaN 
5 && 2  // 2= 
2 && 5  // 5
5 || 0  // 5
0 || 5  // 5
[3]+[3]-[10]  // 23 = lo pas a string
3>2>1  // false
// [] == ![]  // true

// Hoisting
// 1-
//  a se lo lleva para arriba y le da undefine 
//
function test() {
    console.log(a); // undefined
    console.log(foo()); //2

    var a = 1;
    function foo() {
        return 2;
    }
}

test();

// 2-
// 
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}
console.log(getFood(false));// undefine

// This
// 

var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        },
    },
};
// 
console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined // node= Juan Perez


// Event loop
// 1/4/3/2
function printing() {
    console.log(1);// 1
    setTimeout(function () {
        console.log(2);// 4
    }, 1000);
    setTimeout(function () {
        console.log(3);// 3
    }, 0);
    console.log(4);// 2
}

printing();