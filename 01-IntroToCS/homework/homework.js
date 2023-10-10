'use strict';

function BinarioADecimal(num) {
   //  por MI
   // let decimal = 0;
   // for (let i = num.length - 1; i >= 0; i--) {
   //    let digito = parseInt(num[i]);
   //    decimal += digito * Math.pow(2, num.length - 1 - i);
   // }
   // return decimal;

   // forma de la profe
   var resultado = 0
   var exponente = num.length - 1
   for (let i = 0; i < num.length; i++) {
      resultado += num[i] * 2 ** exponente
      exponente--
   }

   //  por MI
   // Con metodo solo
   // return parseInt(num, 2)
}
console.log(BinarioADecimal('10'))//(2);
console.log(BinarioADecimal('111'))//(7);

function DecimalABinario(num) {
   //  Por MI
   // 
   // if (num === 0) {
   //    return "0";
   // }

   // let binario = "";
   // while (num > 0) {
   //    binario = (num % 2) + binario;
   //    num = Math.floor(num / 2);
   // }
   // return binario;

   // Forma de la profe
var resultado = ''

while (num !== 0) {
   resultado =(num % 2) + resultado
   num= Math.floor(num/2)
}
return resultado;

   //  Por MI

      // Con metodo solo.
   // return num.toString(2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
