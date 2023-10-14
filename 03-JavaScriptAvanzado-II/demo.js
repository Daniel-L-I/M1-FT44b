

function mascotas(nombre) {
    // const nombre = 'hola'
    return function (tipo) {
        return 'Tu mascota es un ' + tipo + ' y se llama ' + nombre
    }
}

// ! opcion 1 - clouser gguardado en una variable
console.log(mascotas());// fn

// const mascota = mascotas() //
const mascota = mascotas('hola') //
console.log(mascota('gato')); // 'Tu mascota es un gato y se llama hola'

// ! opcion 2 -clousure - doble invocacion
console.log(mascotas('hola2')('dani'));


//            //
function saludar(saludo) {
    return function (nombre) {
        return saludo + ' ' + nombre
    }
}
// saludar('HOLA')

const saludarHola = saludar('HOLA')

console.log(saludarHola('dani'))



// TODO = PARTICULARIDADES ---> VAR
const crearFuncion = function () {
    var arrglo = []
    for (var i = 0; i < 3; i++) {
        arrglo.push(function () {
            console.log(i); // CON LET =3,3,3 // con let en for =0,1,2
        })
    }
    return arrglo;
}

console.log(crearFuncion());

const nuevoArreglo = crearFuncion()

console.log(nuevoArreglo);

nuevoArreglo[0]()
nuevoArreglo[1]()
nuevoArreglo[2]()



//  TODO : UTILIDADEZ--- en este ejercicio no susede un closure  

function saludo(idioma) {

    if (idioma === 'en') {
        return function () {
            return 'hello' //+ idioma
        }
    }
    if (idioma === 'es') {
        return function () {
            return 'hola'
        }
    } else return function () {
        return 'Otro idioma'
    }
}


console.log(saludo('fr'));

const saludoIngles = saludo('en')
console.log(saludoIngles());

const saludoEspañol = saludo('es')
console.log(saludoEspañol());

const saludoIdioma = saludo('fr')
console.log(saludoIdioma());


// ? AYUDA EN LA HW

function subirCorazon() {
    let contarCorazones = 0

    return function () {
        contarCorazones++
        return contarCorazones;
    }

}
console.log(subirCorazon());
console.log(subirCorazon());
console.log(subirCorazon());
console.log(subirCorazon());
contarCorazones = 10
console.log(subirCorazon());

const usuarioClik = subirCorazon()

console.log(usuarioClik());
console.log(usuarioClik());
console.log(usuarioClik());
console.log(usuarioClik());
console.log(usuarioClik());

//  TODO: bind - .this

var persona = {
    nombre: 'Franco',
    apellido: 'Chequer',
    // datos: function () {
    //     return 'Su nombre es ' + this.nombre + ' ' + this.apellido
    // }
}
var persona2 = {
    nombre: 'dani',
    apellido: 'Che',
}

function datos() {
    return 'Su nombre es ' + this.nombre + ' ' + this.apellido
}

console.log(persona.datos());

const nuevaPersona = persona.datos.bind(persona2)

console.log(nuevaPersona());
//                                   //
console.log(datos());

const personaBind1 = datos.bind(persona2)
console.log(personaBind1());



// TODO:b ind-Fijar parametros

function multiplicar(a,b) {
    return a*b
}

const multiplicarPorDos= multiplicar.bind(this,2)
console.log(multiplicarPorDos(2));
console.log(multiplicarPorDos(3));
console.log(multiplicarPorDos(6));


//  TODO: CALL

const persona = {
    nombre: 'dani',
    apellido: 'Martinez'
}

function logNombre(arg1, arg2) {
    return arg1 + ' ' + this.nombre + ' ' + this.apellido + ' ' + arg2
}

console.log(logNombre.call(persona, 'hola', '¿como estas?'))


// TODO: APPLY lo mismo que call solo q hay que poner []

const persona1 = {
    nombre: 'dani',
    apellido: 'Martinez'
}

function logNombre(arg1, arg2) {
    return arg1 + ' ' + this.nombre + ' ' + this.apellido + ' ' + arg2
}

console.log(logNombre.apply(persona1, ['hola', '¿como estas?']))