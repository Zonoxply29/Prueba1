/* DATOS PRIMITIVOS 
numerico - number
cadena de texto - string
undefined - se desconoce el tipo de dato
Boleano - verdadero y falso
Null - Un tipo de dato que nosotros ponemos

NUEVOS TIPOS DE DATOS PRIMITIVOS
bigint
symbol


TIPOS DE DATOS NO PRIMITIVOS
object
funciones

*/

let saludar = "hola";
console.log(saludar)

let nombre = "HUGO";
console.log('"hola mi nombre es"' + nombre );

/*TEMPLATE STRINGS*/ 
let edad = 19;
let apellidopaterno ="GOMEZ";
console.log(`hola mi nombre es ${nombre + " " + apellidopaterno} mi edad es ${edad}`);

/*ARRAYS */
let animales = ["perro","gato","pajaro","pez"];
console.log(typeof nombre);
/*typeof sirve para conocer un tipo de dato que contiene una variable*/
let numero = 1.5;
console.log(typeof numero);

let datos = ["Ricardo",20,true,undefined,null];
console.log(typeof datos[2]);


/*ARRAY MULTIDIMENSIONAL*/
let amigos =["Antonio","Carlos","Gerardo",["Bryan","Pedro","Diego"],"Juan","Raul"];
console.log(amigos[3][2]);

/*OBJETO*/
let persona = {
    nombre: "Hugo",
    edad: 19,
    estudiante: true,
    amigos:["Antonio","Juan","Luis"]
}

console.log(persona.amigos[2]);

/*TAREA 
Creame un Array que contenga estados de la república y que dentro tenga un objeto que contenga capitales de la republica,
después de debes imprimir con template string 2 estados de la república con su correspondiente capital.
*/

let mexico = {
    estados:["Baja California Norte" , "Chiapas", "Coahuila", "Guerrero", "Morelos", "Nayarit"],
    capitales:["Mexicali", "Tuxtla Gutierrez", "Saltillo", "Chilpancingo","Cuernavaca", "Tepic"]
}

console.log("ESTADOS Y CAPITALES")
console.log(`El estado es ${mexico.estados[4]} y su capital es ${mexico.capitales[4]} `);
console.log(`El estado es ${mexico.estados[1]} y su capital es ${mexico.capitales[1]} `)

/*Snippets
en file 
luego preference y configure user snippets y escribir el nombre del lenguaje 

*/