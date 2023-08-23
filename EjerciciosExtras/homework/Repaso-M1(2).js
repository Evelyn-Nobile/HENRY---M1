//CLOSURE:

const { Queue } = require("../../04-EstructuraDeDatos-I/homework/homework");

//1) Usando closures, crea una funcion que, a partir de un listado de estrenos, recorra el catalogo del cine
//y marque como estrenos aquellas peliculas cuyos nombres coincidan con los de la lista.
//La funcion pelisEstrenos recibira por parametro un arreglo de objetos, donde cada objeto representa una pelicula del
//catalogo y tiene propiedades nombre (string) y estreno (bool). Luego pelisEstrenos debe retornar otra funcion. Esta
//funcion retornada debe aceptar por parametro un arreglo de strings con los nombres de las peliculas que deberan marcarse
//como estrenos en el catalogo. Por ultimo, debe retornarse - El catalogo actualizado (arreglo de obj)  en caso de
//haber encontrado todas las peliculas del catalogo -El string 'no se encontro alguna de esas peliculas en el
//catalogo' en caso de que alguna de las peliculas del arreglo de estrenos no exista en el catalogo

function pelisEstrenos(catalogo) {
  //catalogo: [{nombre: 'Barbie', estreno: true}, {nombre:'Titanic', estreno: false},{nombre:'Openhaimer', estreno: true}]
  function marcarEstrenos(estrenos) {
    for (let i = 0; i < estrenos.length; i++) {
      // Esta iteración recorre el arreglo de strings con los nombres de las películas que deben marcarse como estrenos
      // en el catálogo.

      let pelicula = catalogo.find(
        (pelicula) => pelicula.nombre === estrenos[i]
      );
      // Esta función encuentra la película en el catálogo cuyo nombre coincide con el nombre de la película actual
      // en el arreglo de strings con los nombres de las películas que deben marcarse como estrenos en el catálogo.

      if (pelicula) {
        // Si la película se encontró en el catálogo, se establece su propiedad `estreno` a `true`.
        pelicula.estreno = true;
      } else {
        // Si la película no se encontró en el catálogo, se retorna el string `'no se encontro alguna de esas peliculas en el catalogo'`.
        return "no se encontro alguna de esas peliculas en el catalogo";
      }
    }
    return catalogo; //Una vez que se haya iterado por todo el arreglo de strings con los nombres de las películas que deben
    //marcarse como estrenos en el catálogo, se retorna el catálogo actualizado (arreglo de objetos).
  }
  return marcarEstrenos; // La función pelisEstrenos retorna la función marcarEstrenos
}
//2) Trabajas en la administracion de una empresa y debes calcular los impuestos de la misma. Para ello deberas
//escribir una funcion que reciba los impuestos del año y devuelve un calculo.
// La funcion debe recibir por parametro un arreglo de numeros con las boletas de los impuestos anuales. Dependiendo de
//cada caso responde:
// - Si lo que llega por parametro no es un arreglo debes devolver el string 'error'
// - Si no hay impuestos a pagar debes devolver false
// - Si no hay inconvenientes debes devolver la suma de todos los impuestos para conocer el total

function calcularImpuestos(impuestos) {
  // [15,25,35]
  if (!Array.isArray(impuestos)) return "error";
  else if (impuestos.length === 0) return false;
  else {
    for (let i = 0; i < impuestos.length; i++) {
      let total = 0;
      total += impuestos[i];
    }
  }
  return total;
}
// function calcularImpuestos(impuestos) {
//   if (!Array.isArray(impuestos)) return 'error';
//   if (impuestos.length === 0) return false;
//   return impuestos.reduce((a, b) => a + b);
// }
// Esta función utiliza el método reduce() para sumar todos los elementos del arreglo.
//El método reduce() toma tres parámetros: una variable inicial, un acumulador y una función.
//La variable inicial es el valor inicial del acumulador. El acumulador es una variable que se utiliza para
//almacenar el resultado de las operaciones realizadas sobre los elementos del arreglo.
//La función es una función que se aplica a cada elemento del arreglo y al acumulador.
//El resultado de la función se almacena en el acumulador.
// En este caso, la variable inicial es 0, el acumulador es una variable vacía y la función es una función
// que suma el valor del elemento del arreglo al valor del acumulador. El resultado de la función reduce() es la
//suma de todos los elementos del arreglo.

//LINKED LIST:
//3) Trabajando en un bar notas que algunos pedidos estan repetidos. Para identificar cuales son, crea una funcion que
//encuentre todos los pedidos repetidos y los retorne en una nueva LinkedList
// Crea un nuevo metodo llamado encontrarPedidoRepetido en  el prototipo de linkedlist.
//Este metodo debe aceptar por parametro un string que sera el nombre de un cliente.
//La funcion tendra que identificar todos los pedidos de esta persona en el  mismo nombre de trago y devolver una nueva
//lista que los contenga.
//La lista que se devuelve debe contener todas las repeticiones del pedido.
//Si ningun nodo de la lista coincide con el nombre recibido por parametro,el metodo debe retornar falso

// Definición del constructor Node para los nodos de la lista
// function Node(nombreCliente, nombreTrago) {
//   this.nombreCliente = nombreCliente;
//   this.nombreTrago = nombreTrago;
//   this.next = null;
// }

// // Definición del constructor LinkedList para la lista enlazada
// function LinkedList() {
//   this.head = null;
//   this._length = 0;
// }

// // Método para agregar un nuevo nodo a la lista
// LinkedList.prototype.add = function (nombreCliente, nombreTrago) {
//   const newNode = new Node(nombreCliente, nombreTrago);
//   if (!this.head) {
//     this.head = newNode;
//     this._length++;
//     return newNode;
//   } else {
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//     this._length++;
//     return newNode;
//   }
// };

// // Método para encontrar pedidos repetidos de un cliente
// LinkedList.prototype.encontrarPedidoRepetido = function (nombreCliente) {
//   const pedidosRepetidos = new LinkedList(); // Lista para almacenar pedidos repetidos
//   const pedidosRegistrados = {}; // Objeto para rastrear pedidos

//   let current = this.head; // Puntero para recorrer la lista

//   while (current) { // Comienza a recorrer la lista
//     if (current.nombreCliente === nombreCliente) { // Comprueba si el cliente coincide
//       const clavePedido = current.nombreCliente + '-' + current.nombreTrago;

//       // Si el pedido ya se registró, es repetido y lo agregamos a la lista de repetidos
//       if (pedidosRegistrados[clavePedido]) {
//         pedidosRepetidos.add(current.nombreCliente, current.nombreTrago);
//       } else {
//         pedidosRegistrados[clavePedido] = true; // Registra el pedido para futuras comparaciones
//       }
//     }
//     current = current.next; // Avanza al siguiente nodo
//   }

//   return pedidosRepetidos.head ? pedidosRepetidos : false; // Devuelve la lista de repetidos o falso
// };

function encontrarPedidoRepetido(nombreCliente) {
  let listaRepetidos = new LinkedList();
  let current = this.head;
  while (current) {
    if (current.nombreCliente === nombreCliente) {
      listaRepetidos.add(current.nombreCliente);
    } else {
      return false;
    }
    current = current.next;
  }
  return listaRepetidos;
}

//RECURSION
//4) Mientras trabjas en el bar quieres crear promociones con los tragos mas vendidos. Para esto debes crear una funcion
//que permita encontrar el trago mas popular
//- Crea una funcion que reciba por parametro un objeto de tragos
//- Recursivamente debe recorrer el objeto y encontrar el trago con la mayor cantidad vendida. Finalmente, devolver el
//objeto que representa el trago mas vendido y ademas crearle una propiedad con el nombre 'tragoMasVendido' con el valor
//en true
const tragos = {
  trago1: {
    nombre: "Margarita",
    cantidadVendida: 50,
    subTragos: {
      subTrago1: {
        nombre: "Margarita Clásica",
        cantidadVendida: 30,
        subTragos: {},
      },
      subTrago2: {
        nombre: "Margarita de Fresa",
        cantidadVendida: 20,
        subTragos: {},
      },
    },
  },
  trago2: {
    nombre: "Piña Colada",
    cantidadVendida: 70,
    subTragos: {},
  },
};

function encontrarTragoMasVendido(objetoTragos) {
  let tragoMasVendido = null; //Inicializa una variable tragoMasVendido con el valor null, que se utilizará para rastrear el trago más vendido.
  let cantidadVendidaMaxima = -1; //Inicializa una variable cantidadVendidaMaxima con el valor -1, que se utilizará para rastrear la cantidad máxima vendida.

  for (const key in objetoTragos) {
    //Inicia un bucle for...in que recorre las claves (propiedades) del objeto objetoTragos.
    if (objetoTragos.hasOwnProperty(key)) {
      //Verifica si el objeto objetoTragos tiene la propiedad actual indicada por key.
      const trago = objetoTragos[key]; //Almacena el valor del trago actual en la clave key en la variable trago.
      if (trago.cantidadVendida > cantidadVendidaMaxima) {
        //Compara la cantidad vendida del trago actual con cantidadVendidaMaxima
        cantidadVendidaMaxima = trago.cantidadVendida; //Si la cantidad vendida del trago actual es mayor, actualiza cantidadVendidaMaxima con ese valor.
        tragoMasVendido = trago; //Asigna el objeto trago actual a la variable tragoMasVendido
      }

      if (trago.subTragos && typeof trago.subTragos === "object") {
        //Verifica si el trago actual tiene sub-tragos anidados y si son un objeto
        const subTragoMasVendido = encontrarTragoMasVendido(trago.subTragos); //Llama recursivamente a la función encontrarTragoMasVendido con los sub-tragos actuales.
        if (
          //Compara la cantidad vendida del sub-trago más vendido con cantidadVendidaMaxima
          subTragoMasVendido &&
          subTragoMasVendido.cantidadVendida > cantidadVendidaMaxima
        ) {
          cantidadVendidaMaxima = subTragoMasVendido.cantidadVendida; //Si la cantidad vendida del sub-trago más vendido es mayor, actualiza cantidadVendidaMaxima con ese valor.
          tragoMasVendido = subTragoMasVendido; //Asigna el objeto de sub-trago más vendido a la variable tragoMasVendido
        }
      }
    }
  }

  if (tragoMasVendido) {
    //Verifica si tragoMasVendido tiene un valor (no es null)
    tragoMasVendido.tragoMasVendido = true; //grega la propiedad tragoMasVendido con valor true al trago más vendido.
  }

  return tragoMasVendido; //Retorna el objeto del trago más vendido con la propiedad adicional.
}

console.log(encontrarTragoMasVendido(tragos));

//ALGORITMO DE ORDENAMIENTO
// 5) En nuestro barrio hay algunas casas que no estan disponibles para comprar. Necesitamos facilitarle esta informaciom
//a nuestros clientes. Para esto crea una funcion que reciba un arreglo con  los IDs de todas las casas y los retorne
//ordenados de menor a mayor.
//- Crea un algoritmo de ordenamiento que ordene un arreglo de numeros (casas)
// - Ademas debe retornar false si un numero dentro de un arreglo no es primo
//Ej: let miHouses = [25,3,6,8,5,12,9,28,11]
//sortPrimeHouses ---> false porque 25 no es primo
//let miHouses2 = [61,7,13,11,29,61] devuelve [3,7,11,13,29,61]

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    //Inicia un bucle que comienza desde 2 y se ejecuta hasta la raíz
    //cuadrada del número. El bucle busca divisores potenciales del número para verificar si es primo.
    if (number % i === 0) {
      return false; //Dentro del bucle, verifica si el número es divisible por i. Si es divisible sin dejar residuo
      //(el módulo es 0), entonces el número no es primo y la función retorna false
    }
  }

  return true;
}

function sortPrimeHouses(array) {
  let primeCheck = true;

  for (let i = 0; i < array.length; i++) {
    if (!isPrime(array[i])) {
      //Dentro del bucle, verifica si el elemento actual no es primo usando la función isPrime.
      // Si no es primo, establece primeCheck como false y sale del bucle con break.
      primeCheck = false;
      break;
    }
  }

  if (!primeCheck) {
    //Si al menos uno de los números en el arreglo no es primo, la función retorna false.
    return false;
  }

  let swap = true;
  while (swap) {
    //Inicia un bucle while que se ejecuta mientras swap sea true
    swap = false; // Establece swap como false al principio de cada iteración del bucle.
    for (let i = 0; i < array.length - 1; i++) {
      //Inicia un bucle que recorre el arreglo hasta el penúltimo elemento.
      if (array[i] > array[i + 1]) {
        //Compara dos elementos adyacentes en el arreglo.
        //Si el primero es mayor que el segundo, los intercambia y establece swap como true.
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }

  return array;
}

// Ejemplos de uso
let miHouses = [25, 3, 6, 8, 5, 12, 9, 28, 11];
console.log(sortPrimeHouses(miHouses)); // false

let miHouses2 = [61, 7, 13, 11, 29, 61];
console.log(sortPrimeHouses(miHouses2)); // [7, 11, 13, 29, 61, 61]

//6) Mientras trabajas en un cine, descubres que el catalogo de peliculas esta desordenado. Decides crear una funcion
//que las vuelva a ordenar por año (de antiguas a nuevas) tanto las peliculas ya almacenadas, como las nuevas
//-La funcion recibira dos listas de peliculas (el catalogo disponible y las nuevas peliculas) y tendras que ordenarlas a
//todas de menor a mayor segun su año.
//Tu tarea sera implementar un algoritmo de ordenamiento para crear un unico arreglo que contenga todas las peliculas
//(las del catalogo y las nuevas) ordenadas de menor a mayor segun el año.
//Ambas listas son arreglos de objetos, cada objeto representa  una pelicula y tiene las propiedades nombre (string),
// año(numero), genero (string), y taquillera (booleano)
var catalogo = [
  { nombre: "Toy Story", año: 1995, taquillera: true },
  { nombre: "Gatubela", año: 2004, taquillera: false },
];

var nuevasPeliculas = [
  { nombre: "Mario Bross", año: 2023, taquillera: true },
  { nombre: "Elementos", año: 2023, taquillera: false },
];

function quickSort(array) {

  if (array.length <= 1) return array;

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];
  const equals = [];

  for (const movie of arr) {
    if (movie.año < pivot.año) {
      left.push(movie);
    } else if (movie.año > pivot.año) {
      right.push(movie);
    } else {
      equals.push(movie);
    }
  }

 return [...quickSort(left), ...equals, ...quickSort(right)];

}

function sortMovies(catalogo, nuevasPeliculas) {
const allMovies = [...catalogo, ...nuevasPeliculas];
return quickSort(allMovies); }

const sortedMovies = sortMovies(catalogo, nuevasPeliculas);
console.log(sortedMovies);

// Si no conoces el nombre de la propiedad año en el objeto, pero sabes que quieres ordenar por una propiedad 
//desconocida, puedes modificar el código para hacerlo más genérico.
// Aquí hay una versión modificada del código que ordena por una propiedad desconocida:


// function quickSort(array, property) {
//   if (array.length <= 1) return array;

//   const pivotIndex = Math.floor(array.length / 2);
//   const pivot = array[pivotIndex];
//   const left = [];
//   const right = [];
//   const equals = [];

//   for (const item of array) {
//     if (item[property] < pivot[property]) {
//       left.push(item);
//     } else if (item[property] > pivot[property]) {
//       right.push(item);
//     } else {
//       equals.push(item);
//     }
//   }

//   return [...quickSort(left, property), ...equals, ...quickSort(right, property)];
// }
// En este código, hemos agregado un nuevo parámetro llamado property, que se utilizará para especificar la propiedad
// por la que deseas ordenar. Luego, dentro del bucle for...of, en lugar de acceder directamente a movie.año, 
//estamos utilizando item[property] para acceder a la propiedad desconocida. 
//Esto permite que el código sea más flexible y pueda ordenar por cualquier propiedad que se pase como argumento.

// Por ejemplo, si tienes una propiedad llamada rating, puedes llamar a la función de la siguiente manera para ordenar
// por esa propiedad:


// const sortedByRating = quickSort(array, 'rating');
// En resumen, esta modificación hace que el código sea más genérico y te permite ordenar por propiedades desconocidas 
//en el objeto.


//8) Se desordeno todo en el inventario de una tienda de ropa y hay prendas por todas partes. Crea una funcion
//que nos permita volver a ordenarlas
//La funcion recibira por parametro un arreglo de objetos , donde cada elemento representara una prenda. Cada obj
//tendra las propiedades nombre (string) y precio (numero). Tendras que implementar un algoritmo de ordenamiento
//para poder organizar toda la ropa de mayor a menor segun el precio.
function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const merge = (left, right) => {
    let result = [];
left = mergeSort(left) 
  right = mergeSort(right)

  while (left.length > 0 && right.length>0){
      if (left[0].precio > right[0].precio) {
        result.push(left.shift());
      
      } else {
        result.push(right.shift());
       
      }
    }

    return result.concat(left, right);
  };

  return merge(mergeSort(left), mergeSort(right));
}



let prendas =[{nombre: 'pantalon', precio: 12000}, {nombre: 'blazer', precio: 17000}, {nombre: 'camisa', precio: 9000}, {nombre: 'medias', precio: 1500},{nombre: 'campera', precio: 27000}]

console.log(mergeSort(prendas))


//QUEUE
// 6) Estamos organizando una fiesta para inaugurar una casa, pero hay gente desconocida que intenta ingresar
// Escribe una funcion que permita asegurar que solo ingresen aquellas personas que tienen los tickets VIP
//y que tambies sean conocidos. La funcion recibira por parametro un arreglo que representa en orden la fila
//de personas validas en una nueva Queue en la que iremos filtrando los invitados para que solo queden los
//invitados correctos, en el mismo orden en que estaban en la fila.
// - Recibe por parametro arr,un arreglo que representa en orden, la fila de personas que intentan ingresar.
//El objeto en la posicion 0 del arreglo representa a la primera persona de la fila.
//Cada elemento del arreglo es un obj con propiedades name, ticket y estado
//Debe retornar una Queue que contenga los invitados validos para ingresar.

function fiesta(arr) {
  let newQueue = new Queue(); //declararla fuera del bucle evita que se reemplace en cada iteracion
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].ticket === "VIP" && arr[i].estado === "conocido") {
      newQueue.enqueue(arr[i]);
    }
  }
  return newQueue;
}

//ARBOLES BINARIOS
// 7) Mientras estas trabajando en una tienda de indumentaria, entra un cliente a comprar varias prendas
// Luego de la venta, tu tarea sea marcarlas como vendidas en tu inventario.
//Define un metodo en la clase BinarySearchTree que a partir de un listado de nombres de prendas, agregue
// a los nodos correspondientes a dichas prendas una propiedad vendido con el valor true

//STACK
// 9) Un cliente de nuestra tienda de pantalones te ha solicitado un pantalon de una talla determinada. Es necesario
//ir a buscar el inverntario los pantalones y obtener la prenda solicitada segun la talla.
//Para esto tendras que implementar una funcion que recibira como parametros una lista de tallas y un numero de talla
//solicitada.  La funcion debe retornar, dentro de un objeto, dos pilas. Una con los pantalones solicitados y otra con
//los pantalones restantes.
//Los parametros que recibes son:
//listaDeTallas: arraeglo de numeros
//tallaBuscada: numero
//Debe retornar un obj con dos propiedades:
//pantalonesEncontrados: Stack de numeros en el que cada numero es la talla de un pantalon que coincide con la
//buscada.
//pantalonesRestantes: stack de numeros en el que cada numero es uno de los pantalones restantes

function tiendaDePantalones(listaDeTallas, tallaBuscada) {
  const obj = {
    //Inicializamos pantalonesEncontrados y pantalonesRestantes como instancias de Stack dentro del objeto obj
    pantalonesEncontrados: new Stack(),
    pantalonesRestantes: new Stack(),
  };
  for (let i = 0; i < listaDeTallas.length; i++) {
    if (listaDeTallas[i] === tallaBuscada)
      obj.pantalonesEncontrados.add(listaDeTallas[i]);
    else {
      obj.pantalonesRestantes.add(listaDeTallas[i]);
    }
  }
  return obj;
}

//LINKED LIST
// 10) Para construir una casa nueva, nuestros clientes deben definir que partes de la casa quieren. Para esto
//necesitamos que construyas una funcion que les permita, a aprtir de una lista de espacios (cocina, baño,comedor, etc)
//seleccionar el segmento de la lista que quieren para su casa
//Agrega un nuevo metodo llamado sliceRooms al prototipo de LinkedList
//Este metodo debera tener un funcionamiento parecido al del metodo slice de arreglos, donde a partir de dos
//indices se genera un nuevo arreglo que contiene todos los elementos comprendidos entre estos.
//En este caso, en vez de recibir indices numericos por parametro, recibiras dos valores similares a algunos de los que
//se encuentran dentro de la lista (en este caso los valores seran strings, ya que la lista contiene strings)
//El metodo debe retornar una nueva lista enlazada que contenga el segmento de todos los nodos comprendidos entre
//los dos valores recibidos por parametro sin incluirlos.

LinkedList.prototype.sliceRooms = function () {};

// 11) En el cine donde trabajas, las peliculas estan muy desordenadas. Sabiendo que las listas enlazadas
//son estructuras utiles para almacenar informacion, decides escribir una funcion que permita generar rapidamente
//listas enlazadas de un tamaño especifico.
// Crea un nuevo metodo llamado generarLista en el prototipo de la clase LinkedList. Este metodo debe  aceptar por
//parametro un numero que indicara la cantidad de nodos que debera tener la lista que se genere.
//Finalmente, el metodo debe retornar una nueva lista con la cantidad de nodos especificada por parametro, donde el
//valor de cada nodo sea un numero entero incremental.
//ej: peliculas.generarLista(4)
//Aclaraciones:
// - en el interior de los nodos se deben guardar numeros que incrementen en  +1 (comenzando desde el 1)
// - La clase linkedlist ya se encuentra definida con los metodos search, add y remove

//CLOSURE
// 12) En un barrio se quieren construir nuevas casas, pero no estamos seguros de cuantas podemos construir
//segun la cantidad de bolsas de cemento que se disponenen. Te pedimos que nos ayudes a crear una funcion que permita
// saber si se puede o no construir  X cantidad de casas con N cantidad de bolsas de cemento.
//teniendo en cuenta que con 10 bolsas de cemento se construye una casa, escribe una funcion que reciba por parametro
//la cantidad de bolsas de cemento que disponemos. Usando closures, esta funcion debe retornar una nueva funcion
//que acepte por parametro la cantidad de casas que se quieren construir. Finalmente esa funcion debe retornar:
// - El string 'por favor ingresar cuantas casas quieres construir', si la cantidad de casas recibida por parametro
//es 0 o menor a 0.
//- El string 'no se puede construir casas con esa cantidad de bolsas' si la cantidad de bolsas de cemento no alcanza
//para 1 casa.
//- El string 'solo puedes construir esta cantidad de casas: 1' si la cantidad de casas sobrepasa la cantidad de
//bolsas de cementon necesarias para construirlas (ej: bolsas de cemento = 10 y casas = 2):
// - El boolenao true, si la cantidad de bolsas de cemento alcanza para construir las casas solicitadas.

function crearCasas(bolsasDeCemento) {
  return function (casasAConstruir) {
    if (casasAConstruir <= 0)
      return "por favor ingresar cuantas casas quieres construir";
    else if (bolsasDeCemento < 10)
      return "no se puede construir casas con esa cantidad de bolsas";
    else if (casasAConstruir > bolsasDeCemento)
      return "solo puedes construir esta cantidad de casas: 1";
    else return true;
  };
}

// function crearCasas(bolsasDeCemento) {  En esta versión del código, si la cantidad de casas a construir es mayor que la cantidad de bolsas de cemento necesarias para construirlas, se devuelve un mensaje indicando cuántas casas se pueden construir con las bolsas disponibles. Por ejemplo, si hay 20 bolsas de cemento disponibles, podrían construirse hasta 2 casas.
//   return function(casasAConstruir) {
//       if (casasAConstruir <= 0) {
//           return 'por favor ingresar cuantas casas quieres construir';
//       } else if (bolsasDeCemento < 10) {
//           return 'no se puede construir casas con esa cantidad de bolsas';
//       } else if (casasAConstruir > bolsasDeCemento / 10) {
//           return 'solo puedes construir esta cantidad de casas: ' + Math.floor(bolsasDeCemento / 10);
//       } else {
//           return true;
//       }
//   };
// }

//12) La constructora Henry quiere llevar registro de las casas que se construyen por año, por lo que te piden
//que crees una funcion que realice esta tarea.
//La funcion recibira por parametro un numero que sera una cantidad de años. En este ejercicio, debemos implementar
//una funcion que debe retornar cuantas casas por año se construyeron.
//La funcion debera devolver la cantidad de casas que se pueden cosntruir en base a la siguiente secuencia:
// - si el año que le llega por parametro es negativo, debe devolver false.
// - si el  año es 0 la cantidad de casas por año es 0
//- si el año es 1 la cantidad de casas por año es de 30
//- a partir del segundo año se debe calcular con la siguente formula: c(n-1) + c(n/n) (si son dos años deberia
//retornar 60)
function cantidadCasasPorAnio(anio) {
  if (anio < 0) {
    return false;
  } else if (anio === 0) {
    return 0;
  } else if (anio === 1) {
    return 30;
  } else {
    return cantidadCasasPorAnio(anio - 1) + cantidadCasasPorAnio(anio / anio);
  }
}

//RECURSION
// 13) Trabajas en un cine y un cliente quiere saber si  tienens en cartelera una pelicula que quiere ver.
//Escribe una funcion que provea esta informacion.
// La funcion recibira por parametro un obj de peliculas en cartelera y tambien un string con la pelicula que el cliente
//desea ver . Recursivamente debes buscar la pelicula dentro del obj y  devolverla con el siguiente msj 'si, tenemos
//la pelicula {nombreDeLaPelicula}
//Si la pelicula no se encuentra , devolver el msj 'actualmente no tenemos la pelicula'

function buscarPeliculaEnCartelera(cartelera, peliculaBuscada) {
  for (const pelicula in cartelera) {
    //Inicia un bucle for...in que recorre las propiedades (peliculas) del objeto cartelera
    if (typeof cartelera[pelicula] === "object") {
      // Verifica si el valor correspondiente a la propiedad actual (pelicula) es un objeto. Esto es para manejar el caso en el que hay subcategorías dentro del objeto de la cartelera.
      const resultado = buscarPeliculaEnCartelera(
        cartelera[pelicula],
        peliculaBuscada
      ); //Si es un objeto, llama recursivamente a la función buscarPeliculaEnCartelera pasando el objeto interno (cartelera[pelicula]) y la película buscada.
      if (resultado !== null) {
        // Si se encontró la película buscada en las subcategorías, devuelve el resultado encontrado.
        return resultado;
      }
    } else if (pelicula === peliculaBuscada) {
      //Si no es un objeto, verifica si la película actual coincide con la película buscada.
      return `Sí, tenemos la película '${peliculaBuscada}' en cartelera.`;
    }
  }
  return null;
}

const cartelera = {
  accion: {
    "Duro de Matar": {},
    "Misión Imposible": {},
  },
  comedia: {
    "Los Locos Adams": {},
    "Mi Pobre Angelito": {},
  },
};

const peliculaDeseada = "Misión Imposible";
const mensaje = buscarPeliculaEnCartelera(cartelera, peliculaDeseada);

if (mensaje !== null) {
  console.log(mensaje);
} else {
  console.log("Actualmente no tenemos la película que buscas.");
}

//ARBOLES BINARIOS
//14) Por todo tu esfuerzo hemos decidido regalarte una entrada al cine! solo debes revisar que pelicula es.
//Para eso construye una funcion que busque, entre todas las peliculas, aquella que coincida con tu entrada
//Crea un metodo con el nombre obtenerPelicula en el prototipo de la clase BinarySearchTree. Este metodo
//recibira por parametro todos los datos que figuran en tu entrada.
//A partir de esta informacion, busca dentro del arbol binario aquella pelicula que coincida con el nombre y horario
//de tu entrada. ej en las fotos

//LINKED LIST
//15) En nuestra tienda de indumentaria, debemos migrar todo nuestro stock de un sistema a otro.
//Para esto te pedimos que desarrolles una funcion que nos facilite esta tarea.
//Crea un metodo llamado migrarStock al prototipo de linkedlist.
//Dentro de la lista cada nodo tendra como value un obj coon la informacion de cada prenda: nombre y cantidad de stock
//El metodo debe devolver todas las prendas de la lista en un nuevo objeto que tenga el siguiente formato:
//{nombre: stock, nombre:stock, nomnbre:stock}
//En caso de que la lista este vacia, debe devolver erl string 'actualmente no tenemos stock'
//ej:  linkedlist original: ({nombre:'camisetas', stock:22}) --> ({nombre:'pantalones', stock:12})
//({nombre:'zapatos', stock:45}) --> ({nombre:'bufandas', stock:12})
//({nombre:'sacos', stock:4})
//stock.migrarStock();
//devuelve:
//{camisetas: 22, Pantalones:12, Zapatos:45, Bufandas: 12, Sacos:4}

// ver mas ejerciicos en las fotos
