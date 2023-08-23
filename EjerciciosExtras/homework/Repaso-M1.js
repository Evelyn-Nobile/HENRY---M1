const { queue } = require('@11ty/eleventy-cache-assets');
const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
//const array = [1, [2, [3,4]], [5,6], 7];countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
//                       i

var countArray = function(arr) {
    let sum = 0; //aca voy guardando los valores para hacer la suma
  
    for (let i = 0; i < arr.length; i++) { //recorro el array
      if (Array.isArray(arr[i])) { //si el valor de i es un array aplico recursion 
        sum += countArray(arr[i]); 
      } else {
        sum += arr[i];
      }
    }
  
    return sum;
  };
  

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:

      let count = 0 //cada vez que haga una recursion el count vuelve a 0
        for (let key in obj) {
          count++;  // Incrementar el contador por cada propiedad encontrada
      
          if (typeof obj[key] === 'object' && obj[key] !== null) { //en el caso de tener un array, este typeof me va a decir que el array tambien es un object cuando en realidad no lo es incluso cuando este array tenga objetos dentro de el
            // Si el valor de la propiedad es un objeto (y no nulo), llamamos recursivamente a countProps
           if(!Array.isArray(obj[key])){ //si no es array entro al if
            count += countProps(obj[key]); //la recursion se corta cuando no haya mas propiedades
           }
           
          }
        }
      
        return count;
      }


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    let counter=0
    let current = this.head
while(current){ //es la forma de iterar linkedlist. Mientras el current no este vacio
let number = Number(current.value) //fuerzo al dato del nodo a convertirse en numero. Si no lo puede convertir me da NaN
if(isNaN(number)){//pregunto si el valor anterior es NaN ---> 2: false 'franco':true
counter++ //el contador va a aumentar cada vez que haga un cambio
current.value= 'Kiricocho'
}
current = current.next //piso la referencia para moverme de nodo
}
return counter
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
let newQueue = new Queue() //Ya esta creada, solo la tengo que instanciar. Devuelve un objeto que tiene una propiedad array y ahi adentro esta el array: Queue{Array:[]}//  

while(queueOne.size() || queueTwo.size()){ //mientras que haya elementos en uno o en otro para comparar
let first = queueOne.dequeue() //saco el primer elemento de cada queue, aca guardo el elemento sacado
let second = queueTwo.dequeue()
if(first) newQueue.enqueue(first) //si hay elementos en first lo pushea al nuevo array
if(second) newQueue.enqueue(second)
}
return newQueue
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
return function(num){ // en una closure el return function() es lo primero que escribo. Recibo un numero que voy a tener que multiplicar por el parametro recibido en la funcion padre
    return num * multiplier //como es una closure tengo acceso al parametro de la funcion padre
}
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
if(this.left === null && this.right === null) return this.value //retorno el valor si las ramas del arbol estan vacias
if(this.left !== null && this.left === null) return this.value + this.left.sum() //aca tengo una sola rama, la izquierda
// para sumarle a la raiz principal la raiz del subarbol, debo hacer la recursion hasta que el primer if se corte y me haga la suma

if(this.left === null && this.right !== null) return this.value + this.right.sum()

if(this.left !== null && this.right !== null)return this.value + this.left.sum() + this.right.sum()
}


module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}