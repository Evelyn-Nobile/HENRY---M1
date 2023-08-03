'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial 
(representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. 
Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente,
 como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el
  resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir
 funciones que logren los mismos resultados pero de manera iterativa.
*/
// La función factorial es una función matemática que toma un número entero positivo como entrada y devuelve 
//el producto de todos los números enteros positivos desde 1 hasta ese número. 
//el factorial de 0 y 1 es 1.

function nFactorial(n) {
if(n === 0 || n === 1){ //verifica si n es 0 o 1 por ejemplo: n =5 ---> 5 no es 0 ni 1 por lo tanto pasa a la siguiente condicion
  return 1 // si n es 0 o 1 devuelve 1 porque el factorial de 0 y 1 es 1
} else if( n < 0){ // verifica si n es negativo. El factorial debe ser positivo. 5 es positivo por lo tanto pasa al else
  return false
} else{
  let factor = nFactorial(n - 1) // a n le resto 1 y lo guardo en una variable ---> 5-1=4
  return factor * n // Devuelvo el resultado de la multiplicacion de n * el resultado de la recursion --->5*4=20
}


}
  
 



//El término "Fibonacci" se refiere a una secuencia matemática muy famosa conocida como "Secuencia de Fibonacci". 
// Esta secuencia comienza con los números 0 y 1, y cada número subsiguiente es la suma de los dos números anteriores. 
// La secuencia de Fibonacci sigue la siguiente regla:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// Es decir, el tercer número es la suma del primer y el segundo (1 + 0 = 1), el cuarto número es la suma del segundo y 
// el tercer (1 + 1 = 2), el quinto número es la suma del tercer y el cuarto (2 + 1 = 3), y así sucesivamente.
// nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente,
//  como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será
 //el  resultado de la suma del último elemento y el anterior.
// Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
//0, 1, 1, 2, 3, 5, 8, 13
function nFibonacci(n) {
  
  if(n===0){
    return 0
  } else if (n === 1){
    return 1
  }
  else if( n > 1){
    let enesimo = nFibonacci(n-1) + nFibonacci(n-2) 
    
    return enesimo
   
  }


}
console.log(nFibonacci(7))

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el 
primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden. -
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía. 
  - size: retorna el tamaño (cantidad de elementos) de la queue. 

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.array = []
}
Queue.prototype.enqueue = function(ele){
  this.array.push(ele)
}

Queue.prototype.dequeue = function(){
  if(this.array.length > 0){
    return this.array.shift()
  } else{
    return undefined
  }

}
  Queue.prototype.size = function (){
    return this.array.length
}

const newQueue = new Queue()
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
