# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function (a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1 porque x esta definida como 1 en el contexto global. Como no esta guardada en una variable no le asigno un espacio en memoria
```

```javascript
console.log(bar); //undefined
console.log(baz); //is not defined. Error. Lo de abajo ya no se ejecuta
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2; // si tuviera el console.log de baz abajo de esta linea si me imprimiria 2
```

```javascript
var instructor = "Tony";
if (true) { //Si fuera false, no entra al bloque del if por lo tanto no se mostraria nada
  var instructor = "Franco"; //solo se crean contextos nuevos con ejecucion de funciones. If no es funcion por lo tanto las dos variales instructor pertenecen al mismo contexto (global) por lo tanto se sobreescribe
}
console.log(instructor); //Franco
```

```javascript
var instructor = "Tony"; 
console.log(instructor); //Tony
(function () { // (fn{})() --> funcion que se autoejecuta (anonima) o sea que se va a ejecutar apenas llegue a la linea 53. Se ejecuta una sola vez. Nuevo contexto de ejecucion
  if (true) {
    var instructor = "Franco"; 
    console.log(instructor); // Franco
  }
})();

console.log(instructor);//Tony
```

```javascript
var instructor = "Tony"; 
let pm = "Franco";//No se le guarda espacio en memoria a let
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //The Flash
  console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco ---> por el scope. En el caso del if tengo llaves {} por lo tanto es un scope. Todo lo que no este rodeado de llaves, pertenece al scope global. TODO LO DECLARADO CON LET NACE Y MUERE DENTRO DE SU SCOPE  
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2 
"2" * "3"//6
4 + 5 + "px" //'9px' 
"$" + 4 + 5 //'$45'
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //infinity
{}[0] //{} ---> representa a un objeto vacio. No existe la propiedad 0 dentro de este objeto//  undefined
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 // 5
0 || 5 //5
[3]+[3]-[10] // 23 
3>2>1  //false   
 [] == ![] // true

// 6 / "3" // Resultado: 2
// El operador / es un operador de división. JavaScript intentará convertir el segundo operando, que es "3" (cadena), en un número y luego realizará la división. Al convertir la cadena "3" a un número, se obtiene el valor 3, y la división de 6 entre 3 resulta en 2.

// "2" * "3" // Resultado: 6
// El operador * es un operador de multiplicación. JavaScript intentará convertir ambos operandos en números y luego realizará la multiplicación. La conversión de las cadenas "2" y "3" en números da como resultado 2 y 3, respectivamente. La multiplicación de 2 por 3 resulta en 6.

// 4 + 5 + "px" // Resultado: "9px"
// En esta operación, primero se realiza la suma 4 + 5, lo que da como resultado 9, y luego el operador + también se utiliza para concatenar la cadena "px" al número 9, lo que resulta en "9px".

// "$" + 4 + 5 // Resultado: "$45"
// En esta operación, primero se realiza la concatenación de la cadena "$" con el número 4, lo que da como resultado "$4". Luego, se concatena la cadena "5" al resultado anterior, lo que resulta en "$45".

// "4" - 2 // Resultado: 2
// El operador - es un operador de resta. JavaScript intentará convertir la cadena "4" en un número y luego realizará la resta. Al convertir la cadena "4" a un número, se obtiene el valor 4, y la resta de 4 menos 2 resulta en 2.

// "4px" - 2 // Resultado: NaN (Not-a-Number)
// En esta operación, JavaScript intentará convertir la cadena "4px" en un número para realizar la resta. Sin embargo, la cadena no representa un número válido, por lo que el resultado de la operación es NaN.

// 7 / 0 // Resultado: Infinity
// La división entre un número finito y 0 resulta en el valor especial Infinity, que representa el infinito positivo.

// {}[0] // Resultado: undefined
// Aquí, se está creando un objeto vacío y luego intentando acceder al elemento con clave 0 dentro del objeto. Sin embargo, los objetos no tienen una propiedad con índice numérico 0, por lo que se obtiene undefined.

// parseInt("09") // Resultado: 9
// La función parseInt() analiza la cadena "09" y devuelve el número entero 9. Al interpretar "09", JavaScript ignora el 0 inicial y realiza la conversión a un número entero.

// 5 && 2 // Resultado: 2
// El operador lógico && devuelve el segundo operando si el primer operando es verdadero. En este caso, ambos operandos son verdaderos (diferentes de cero), por lo que el resultado será el segundo operando, que es 2.

// 2 && 5 // Resultado: 5
// Similar al caso anterior, en este caso, el primer operando (2) es verdadero, pero el segundo operando (5) es el resultado de la operación completa porque ambos operandos son verdaderos.

// 5 || 0 // Resultado: 5
// El operador lógico || devuelve el primer operando si es verdadero. En este caso, el primer operando (5) es verdadero, por lo que el resultado será 5. 

// 0 || 5 // Resultado: 5
// En este caso, el primer operando (0) es falso, por lo que JavaScript evalúa el segundo operando (5) y devuelve 5 como resultado.

// [3]+[3]-[10] // Resultado: 23
// En esta operación, se están sumando y restando arrays, lo que da como resultado una concatenación de cadenas. [3] + [3] da como resultado "33" (concatenación de dos arrays que contienen el número 3), y luego "33" - [10] se convierte en una operación inválida, por lo que JavaScript intenta convertir la cadena "33" a un número y obtiene el resultado 33, lo cual se resta con el número 10 resultando en 23.

// 3>2>1 // Resultado: false
// La expresión 3>2 evalúa a true, y luego la comparación true > 1 se evalúa como false, ya que true se convierte a 1 en una comparación numérica, y 1 no es mayor que 1.

// [] == ![] // Resultado: true
// Esta operación puede ser confusa debido a la coerción de tipos.

// El lado izquierdo [].toString() devuelve una cadena vacía "".
// El lado derecho ![] se evalúa primero como !true y devuelve false.
// Entonces, JavaScript intenta convertir "" en un booleano, y una cadena no vacía se considera verdadera en su forma booleana.
// Finalmente, la comparación false == true se convierte a 0 == 1, que es false. Estan en distintos espacios de memoria. Son arrays distintos.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // undefined. En la fase de creacion se guarda undefined como valor de a
  console.log(foo()); // 2 porque la funcion se guarda entera en la fase de creacion por lo tanto conocemos su valor

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) { //En la fase de ejecucion food toma el valor de false por lo tanto no entra al bloque if. Si fuera true me devolveria frieskies
    var snack = "Friskies";
    return snack;
  }
  return snack; //undefined
}

getFood(false); //Le guardo espacio de memoria al parametro o sea a food//undefined porque en la fase de creacion al no ejecutarse el bloque if, el valor de snack se mantuvo en undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa. Entro a la propiedad prop del objeto obj y ejecuto la funcion getFullName. En esta funcion tengo un this que apunta al contexto de la funcion. Pero dentro de la funcion no tengo el valor de fullname por lo tanto se la pide al contexto de afuera (al anterior)

var test = obj.prop.getFullname; //Guardo en la variable la funcion getFullName o sea que ahora test es una funcion// sacamos la funcion y la copiamos en el objeto global//entro a prop y de prop entro a getFullName//La diferencia con la linea anterior es que en la anterior se ejecuta la funcion por lo tanto se crea un nuevo contexto

console.log(test());//la funcion test se ejecuta en el contexto global. En el contexto global fullname es undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
//Teniendo en cuenta el código anterior, el orden en el que se muestra en consola será el siguiente:
// 1
// 4
// 3
// 2
// Esto se debe a que JavaScript no puede resolver las declaraciones asíncronas porque como ya sabemos JavaScript es síncrono y single threated (único hilo de ejecución). Entonces, las declaraciones con setTimeOut son resueltas por una WebApi y una vez que las resuelve, las coloca en una cola y espera a que se vacie el stack. Por último podemos decir que teniendo en cuenta que en el caso del stack, la primera declaración que entra es la última en salir y que no contiene las declaraciones que demoran cierto tiempo, se muestra primero el 4 y luego el 1. Y como en la cola (queue) el primero que entra es el primero que sale,se ejecuta primero 3 y luego el 2.
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
