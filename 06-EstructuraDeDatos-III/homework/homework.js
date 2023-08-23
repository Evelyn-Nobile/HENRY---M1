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
// function BinarySearchTree(value) {
//    this.value = value; //este valor se lo damos siempre de entrada (root)
//    this.right = null;
//    this.left = null;
//  }
 
//  BinarySearchTree.prototype.insert = function (value) {
//    let subTree = new BinarySearchTree(value); //creamos los subarboles que se van a ir agregando a las ramas
 
//    // ES MENOR SE VA A LA IZQ
//    if (value < this.value) { //value<root
//      if (this.left === null) { //this.left todo lo que esta en la rama izquierda
//        this.left = subTree;//esta vacio , lo coloco
//      } else {
//        this.left.insert(value); //Si hay un arbol en la rama izquierda hago la recursion para que ahora mire a ese
//                                 // sub arbol y no el arbol completo. Para seguir viendo el lado izquierdo. 
//                                 //Se corta cuando encuentra un null
//      }
//    }
 
//    // ES MAYOR SE VA A LA DERECHA
 
//    if (value >= this.value) {
//      if (this.right === null) {
//        this.right = subTree;
//      } else {
//        this.right.insert(value);
//      }
//    }
//  };
 

//  BinarySearchTree.prototype.size = function(){
//   if(this.left === null && this.right === null) return 1 //Esta es la rama raiz
//   if(this.left !== null && this.right === null) return 1 + this.left.size() //retorno uno por la raiz mas todo lo que me de del lado izquierdo con la recursion 
//   if(this.left === null && this.right !== null) return 1 + this.right.size() //retorno uno por la raiz mas todo lo que 
                                                                                                     
//                                                                               //me de del lado derecho con la recursion
//  if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size()


//  }

//  BinarySearchTree.prototype.contains = function(value){ //verifica si existe o no un valor ---> el que me pasan por parametro 
// if(this.value === value) return true //si el valor es igual a la raiz retorna true
// if(value > this.value) {
//   //si entro aca voy a la derecha porque es mayor
//   if(this.right === null) return false //si no hay nada en la rama no tengo nada que comprarar
//  return this.right.contains(value) //si no esta vacia retorno la recursion
// }
// if(value < this.value) {
//   //si entro aca voy a la izquierda porque es menor
//   if(this.left === null) return false //si no hay nada en la rama no tengo nada que comprarar
//  return this.left.contains(value) //si no esta vacia retorno la recursion
// }
//  } //con cada recursion evaluo distintos arboles por lo tanto distintas raices


// BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){
// //pedido > 'in-order' ---> left - root - right
// //pedido > 'pre-order' ---> root - left - right
// //pedido > 'post-order'  ----> left -right -root
// //pedido > undefined -> si no me lo mandan en este caso se hace in order tambien
// if(pedido === 'in-order' || pedido === undefined){ 
//   if(this.left !== null) this.left.depthFirstForEach(cb,pedido) //si hay algo, hace la recursion
//   cb(this.value) //el cb pushea el value a un array. Tambien se usa cunado el recorrido llega a Root
//   if(this.right !== null) this.right.depthFirstForEach(cb,pedido) //si hay algo, hace la recursion
// }

// if(pedido === 'pre-order'){
// cb(this.value)
// if(this.left !== null) this.left.depthFirstForEach(cb,pedido)
// if(this.right !== null) this.right.depthFirstForEach(cb,pedido)
// }

// if(pedido === 'post-order'){
//   if(this.left !== null) this.left.depthFirstForEach(cb,pedido)
//   if(this.right !== null) this.right.depthFirstForEach(cb,pedido)
//   cb(this.value)

// }

// BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){ //recorre por niveles. funciona como una queue o sea va por orden del primero al ultimo
// //array = [] es un default parameter. Podemos agregar parametros por default para la recursion. Vamos a pushear los valores a este array
// if(this.left !== null){
//   array.push(this.left) //si encuentro un subarbol, lo pusheo TODO lo que tengo a la izquierda 
// }
// if(this.right !== null){
//   array.push(this.right)
// }
// cb(this.value) //la raiz de cada arbol 
// }

// if(array.length > 0){
// array.shift().breadthFirstForEach(cb,array) //saca el primer arbol ingresado y hace la recursion terminada la recursion saca el otro y asi sucesivamente
// }
// }
//  let newTree = new BinarySearchTree()

function BinarySearchTree(value) {        // Creamos nuestra función constructora la cual va a recibir un parámetro para el Root inicial.
  this.value = value;                     // 1er propiedad de nuestro árbol: el Root. Este será igual al valor que recibamos por parámetro.
  this.left = null;                      // 2da propiedad: nuestra rama izquierda que inicialmente será 'null'.
  this.right = null;                     // 3ra propiedad: nuestra rama derecha que inicialmente será 'null'.
}

BinarySearchTree.prototype.size = function () {
  let counter = 1

  if (this.left) {
     counter = counter + this.left.size()
  }

  if (this.right) {
     counter = counter + this.right.size()
  }

  return counter;
};


BinarySearchTree.prototype.insert = function (value) {         // Agregamos el primer método que será 'insert', para agregar nodos a nuestro árbol. Debe recibir un parámetro.
  if (value < this.value) {                                    // Primero preguntamos con un condicional si el valor del nuevo nodo es mayor o menor que nuestro Root.
     if (this.left) {                                         // Si es menor, iremos hacia la izquierda. Luego, con otro condicional, preguntamos si la izquierda está ocupada.
        this.left.insert(value);                              // En caso de que esté ocupado, hacemos recursión volviendo a ejecutar el método insert dentro de nuestra rama izquierda.
     }

     else {                                                   // Si nuestra rama izquierda no está ocupada, es decir, es null. Vamos a instanciar un nuevo arbol con nuestro parámetro.
        this.left = new BinarySearchTree(value);
     };
  }                                                           // A continuación establecemos el else if para el caso de que sea mayor y deba ir hacia la derecha.
  else if (value > this.value) {                               // Con el else if, preguntamos si nuestro valor es mayor a nuestro Root inicial.
     if (this.right) {                                        // Al ir hacia la derecha, con otro condicional preguntamos si la rama derecha está ocupada.
        this.right.insert(value);                             // En caso de que sí esté ocupada, hacemos recursión volviendo a ejecutar el método insert dentro de nuestra rama derecha.
     }

     else {                                                   // Si nuestra rama derecha no está ocupada, es decir, es null...
        this.right = new BinarySearchTree (value);            // ...vamos a instanciar un nuevo arbol con nuestro parámetro.
     };
  };
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;

  if (this.left && this.left.contains(value)) return true; 
           
  if (this.right && this.right.contains(value)) return true;

  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, value) {     // Este método nos servirá para recorrer el árbol. Recibirá un callback y un método de recorrido (ver abajo).
  // RECORRIDOS:
  // pedido >>> "in-order" => left, root, right
  // pedido >>> "pre-order" => root, left, right
  // pedido >>> "post-order" => left, right, root

  if (value === "in-order" || value === undefined) {                                      // Pregunto de qué clase es mi recorrido, si es de tipo "in-order" o undefined...
     if (this.left && this.left.depthFirstForEach(cb, value));      // Entonces pregunto si hay algo a la izquierda, si eso da true, hacemos recursión ejecutando el método depthFirstForEach a la izquierda.
     cb(this.value);                                                 // Cuando no loggre entrar al if, es decir, ya se encuentre a la izquierda del todo. Va a ejecutar el callback con el root como parámetro.
     if (this.right && this.right.depthFirstForEach(cb, value));       // Una vez haya ejecutado el callback, vamos a preguntar si a la derecha hay algo. En caso de que de true, hacemos recursión ejecutando el método depthFirstForEach a la derecha.
  }
  
  if (value === "pre-order") {
     cb(this.value); 
     if (this.left && this.left.depthFirstForEach(cb, value));
     if (this.right && this.right.depthFirstForEach(cb, value)); 
  }

  if (value === "post-order") {
     if (this.left && this.left.depthFirstForEach(cb, value));
     if (this.right && this.right.depthFirstForEach(cb, value));
     cb(this.value);
  }
} 

BinarySearchTree.prototype.breadthFirstForEach = function (cb, almacen = []) {
  cb (this.value);

  if (this.left) {
     almacen.push(this.left)
  }

  if (this.right) {
     almacen.push(this.right)
  }

  if (almacen.length > 0) {
     almacen.shift().breadthFirstForEach(cb, almacen);
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
