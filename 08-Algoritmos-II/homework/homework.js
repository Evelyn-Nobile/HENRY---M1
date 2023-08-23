'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
//[3,1,9,4,5,2,7,8]
if(array.length <= 1) return array //caso base o de corte. Solo se realiza la recursion mientras haya mas de 
//un elemento
let getPivot = Math.floor(Math.random() * array.length) //Elijo el pivote (me da el indice)
let pivot = array[getPivot] // para guardar el pivote --> ahora el pivote es el valor del array em 
//el indice obtenido arriab

let equals = [] //array para guardar el pivote y los que son iguales
let left = [] // array para guardar los menores
let right = []  //array para guardar los mayores

 

for(let i=0; i<array.length;i++){ //recorro el array
  if(array[i] !== pivot){ //si el valor del array es distinto al valor del pivote entro al if
    if(array[i] < pivot) left.push(array[i]) //encuentro los menores y los guardo en left
      else right.push(array[i]) //encuentro los mayores y los guardo en right
  }
else equals.push(array[i])  //si el valor es igual al pivote lo guardo en equals
     
  }
  return quickSort(left).concat(equals).concat(quickSort(right)) 
  //suponiendo que tengo el array [9,7,3,1,5,3,6] y que los arrays quedaron asi:
  // left= [1] equals =[3,3] right = [9,7,5,6]
  // hago la concatenacion: ([1]).concat([3,3]).concat([9,7,5,6]) ----> no esta ordenado, entonces entra la recursion
  //que sigue dividiendo hasta que quede ordenado (en equals no hago recursion)
  //la recursion va a cortar cuando tenga un return y el return lo voy a tener si se cumple el primer if (linea 10)
  //la recursion se hace cada vez que tenga un array de de mas de un elemento
  //con cada recursion voy a tener un pivote distinto
}

  


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length < 2) return array //Caso de corte, la recursion se termina si hay menos de dos elementos en el array
  let mitad = Math.floor(array.length / 2)//Hay que ir dividiendo los arrays en dos. Uso Math floor para quedarme con el numero entero mas chico
  let left =  array.slice(0,mitad) //Slice hace la division entre el inidice 0 y la mitad del array sin incluir el
  // ultimo indice
  let right = array.slice(mitad)// Ahora divide desde la mitad hasta el final

  array = [] //Para ir pisando el array que tengo como parametro cuando ya no queden elementos en el. reutilizamos memoria

  left = mergeSort(left) //recursion con los arrays divididos, por cada vuelta hace la comprobacion y divide
  right = mergeSort(right)

  while (left.length > 0 && right.length>0){ //mientras haya elementos en los array
    if (left[0] < right [0]) array.push(left.shift())//comparo los indices cero de cada array
 // si es menor el valor del array izquierdo, lo guardo en el array vacio y 
      //saco ese valor del array left porque el indice nunca cambia
          
  else array.push(right.shift()) //el shift elimina un valor y lo retorna
          


  }
  return array.concat(left, right)//concateno en un solo array. Siempre el izquierdo va primero
}

// No modificar nada debajo de esta línea

module.exports = {
  quickSort,
  mergeSort,
};
