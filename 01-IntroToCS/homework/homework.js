"use strict";
//[1    1     1 ]
function BinarioADecimal(num) {
  //recibe un string binario ej:'111' y devuelve un enterp con su numero decimal
let decimal= 0;
let arr = num.split('').reverse();
for(let i=0; i<arr.length; i++){
  let stringToNumber = parseInt(arr[i])
  
  decimal = decimal + stringToNumber * Math.pow(2,i)
}
return decimal;
}


function DecimalABinario(num) {
  //recibo un entero decimal y devuelve un string con su numero binario

  if(num<=0) return '0000000'
  let array = [];
  while (num>0){
array.unshift(num%2)
num = Math.floor(num/2)
    }
    return array.join('')
}
  


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
