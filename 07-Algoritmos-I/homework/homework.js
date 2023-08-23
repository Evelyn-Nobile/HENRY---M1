"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1]; //el 1 siempre va a estar
  let divisor = 2; // empiezo dividiendo por el numero siguiente al 1. Siempre se divide por lo mas chiquito
  while (num > 1) {
    //uso while porque no me hace falta trabajar con indices y me da un caso de corte. num > 1 porque el 1 ya lo tengo, no lo tengo que pushear
    if (num % divisor === 0) {
      // si lo puedo dividir dandome el resto 0, agrego al array ese divisor
      array.push(divisor);
      num = num / divisor; // para seguir factoreando ahora tengo que seguir buscando divisores pero a partir del primer numero divido
    } else {
      divisor++; // si el resto no da 0 incremento el divisor
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // let arr = array; //necesito hacer un doble for porque itera en posiciones distintas
  // for (let i = 0; i < arr.length; i++) {
  //   //recorre el array desde la posicion 0
  //   for (let j = i + 1; j < arr.length; j++) { //si i avanza, j avanza
  //     if (arr[i] > arr[j]) { //si i no es mayor a j, vuelven a avanzar i y j
  //       //comparo el valor. Si i es mayor a j cambio las posiciones
  //       let aux = arr[i]; // Para poder reemplazar valores, debo guardarme el valor reemplazado o sea el i para no perderlo
  //       arr[i] = arr[j]; // ahora i pasa a ser j porque necesito mandar los mayores atras
  //       arr[j] = aux; // mando el menor para adelante, reemplazando el valor de aux por el valor de j
  //     }
  //   }
  // }
  // return arr;

  let swap = true;
  while (swap) {
    swap = false; //apenas entra cambia a false
    for (let i = 0; i < array.length - 1; i++) {
      // length - 1 porque al ultimo no se llega ya que siempre es el mayor
      if (array[i] > array[i + 1]) {
        //si i no es mayor a i+1, vuelven a avanzar i. si i es mayor a i+1 cambian los valores entre si
        let aux = array[i]; // Para poder reemplazar valores, debo guardarme el valor reemplazado o sea el i para no perderlo
        array[i] = array[i + 1]; // ahora i pasa a ser i+1 porque necesito mandar los mayores atras
        array[i + 1] = aux; // mando el menor para adelante, reemplazando el valor de aux por el valor de i+1
        swap = true; //cuando llega a esta linea swap ahora cambia a true otra vez y siempre que while sea true entra al while, o sea se resetea el ciclo hasta que quede ordenado el array o sea hasta que el swap sea false. Y cuando queda en false? si i no es mayor a i+1, no entra el if y sigue avanzado y si no entra al if, swap = true nunca se cumple porque esta dentro del if. El ciclo sigue avanzando y si ya esta ordenado de menor a mayor, nunca entra al if y el swap se mantiene en false (ya que habia cambiado su valor apenas entro al while)
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 
  for (let i = 1; i < array.length; i++) {
    //i tiene que empezar en 1 porque tengo que comparar de derecha a izquierda <--
    let j = i - 1; //creo el puntero j que va a ir una posicion atras de i
    let aux = array[i]; //creo la variable para sacar el valor, pisarlo y no perderlo
    while (j >= 0 && aux < array[j]) {
      array[j + 1] = array[j]; //reemplazo el valor que le sigue a j por el valor actual de j
      j--; //sigue yendo para atras
    }
    array[j + 1] = aux; //cuando aux>array[j] y cuando j ya no tiene nada que comparar o sea cuando j<0 --> j= -1 coloco el valor de aux en la posicion 0
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for (let i =0; i<array.length; i++){
    let min = i //estoy buscando el minimo y el minimo siempre arranca siendo la posicion de i o sea 0. Nos quedamos con la posicion no el valor
    for(let j  = i+1; j<array.length;j++){ //necesito otro puntero para poder comparar los valores de i con los que le siguen
      if(array[j]<array[min])//comparo si el valor de j es menor al valor que tengo en el minimo//si la condicion no se cumple j avanza
      min = j //Ahora el min esta en j // si encontre un valor menor a mi minimo, cambio la posicion actual de min por la posicion de j y avanza j porque j va a seguir buscando. Cuando j ya no pueda avanzar mas es decir cuando llega al final paso al siguiente bloque if
          }
          if (i !== min){ //evaluo las posiciones no sus valores
             let aux = array[i]//de aca en mas si reemplazo por el valor. Siempre me guardo el valor reemplazado para no perderlo
             array[i] = array[min] //el valor de la pos i ahora vale el valor de la posicion de min
             array[min] = aux // el valor de la pos de min ahora vale el valor que guarde en auxiliar
          }
  }
  //una vez terminado este bloque if que empezo porque j ya no tenia mas espacio para moverse, se reinicia el ciclo, avanzando i
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
