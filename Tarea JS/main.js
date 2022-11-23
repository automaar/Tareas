// ------- RETO 1: VARIABLES
// Guarda en variables el nombre de las siguientes mascotas:
// 1. Pedrito
// 2. Rufo
// 3. Chancla
//
// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// “Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho”
// ------- RETO 2: INPUT/OUTPUT

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
//
// “Quiero mucho a mis mascotas mascota1 y mascota2”
//
// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// ------- RETO 3: CONVERSIÓN DE DATOS
// 1. Guarda la cadena de texto "100" en una variable
// 2. Muestra el contenido de esta variable en consola
// 3. Muestra el TIPO DE DATO de esta variable en consola
// 4. Transforma la variable de string a number
// 5. Muestra nuevamente el contenido de esta variable en consola

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla?
// ¿Qué es entonces un tipo de dato?



//RETO I

var mascotas=["Pedrito", "Rufo", "Chancla"]
console.log("Mis mascotas son ", mascotas[0], ",", mascotas[1], "y", mascotas[2], ". Les quiero mucho")


//RETO II

var mascota1 = prompt("dime un nombre de mascota: ")
var mascota2 = prompt("dime un nombre de otra mascota: ")

console.log("Quiero mucho a mis mascotas", mascota1, "y", mascota2)

//RETO III

var text="100"
console.log(text)
console.log(typeof text)
text=parseFloat(text)
console.log(text)

//R:la diferencia es que primero lo muestra como texto ya que la definimos asi, pero luego... al cambiar el tipo de dato se muestra como numero (azul)
//R:un tipo de dato es una cadena ya sea de caracteres o numeros que son definidos por la variable creada
