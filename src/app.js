import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// funciones

// scope
// function nombreDeFuncion (parametros) {
//   bloque de codigo
//   return algo
// }

// programacion funcional
// const arrowFunction = (parametros) => {
//  bloque de codigo
//  return algo
// }



//decalracion de una funcion 
function saludarClassic () {
  return 'hola'
}

const saludarArrow = () => {
  return 'hola'
}
//si el bloque de codigo se puede resolver en una expresion js, se puede devolver directamente
const saludarUnaLinea = () => 'hola'

//llamar una funcion
console.log(saludarClassic)
console.log(saludarArrow)

//ejecutar una funcion 
console.log(saludarClassic())
console.log(saludarArrow())
console.log(saludarUnaLinea())

const ejemploMalConsoleLog = () => {
  return console.log('mal ejemplo') // NO
}

console.log(ejemploMalConsoleLog())
console.log(console.log('pepe'))

//usando console.log dentro de la funcion

const ejemploConLog = () => {
  console.log('se esta ejecutando la funcion')
  return 'retorno de ejemploConLog'
}

console.log(ejemploConLog())


//paramtros en funciones
//lo podemos ver como que el parametro es una variable
const sayHi = (name) => {
  return 'hola ' + name
}
const sayHiMod = name => 'hi ' + name // no es obligatorio, ni necesario para que se acepten los proyectos

// en la ejecucion, se asignamos un valor al parametro que recibe la funcion
console.log(sayHi('pepe'))
let matia = 'matia'
console.log(sayHi(matia))
console.log(sayHiMod('barbara'))

// una funcion que tiene el parametro con un valor por defecto
const tuDentroDeDiez = (age = 10) => {
  return age+10
}

console.log(tuDentroDeDiez(55))

const people = (name="User", age=18, city='Berlin', country="Alemania") => {
  return `Desde ${country}! Su nombre es ${name} con ${age} de edad y vive en ${city}.`
}
//los parametros se vana  pasar en el mismo orden que se declaran
console.log(people("Pepe", 23, 'Sevilla', 'España'))
console.log(people())
console.log(people("Maria", 27))

const auth = (email, password, isRegister=false) =>{
  console.log(email, password, isRegister)
  if (isRegister) {
     return ('se va a registrar') //fin de funcion
  }
  return 'se va a logear' //fin de funcion
} 

console.log(auth('pepe@pepe.pe', "pepe123"))
console.log(auth('pepe@pepe.pe', "pepe123", true))


const funcConArr = (arr, num) => {
  return arr.indexOf(num)
}
console.log(funcConArr([1,2,3], 2))



const objTest = {
  name: 'pepe',

}

let abc = 'age'

console.log(objTest.name) // pepe
objTest.name = 'Lola'
console.log(objTest.name) // lola
console.log(objTest.age) // indefinido
objTest.age = 55 // si existe la propiedad, la actualiza, si NO existe, la crea con el valor dado
console.log(objTest.age) // 55
console.log(objTest["age"])
// el . en el objeto no es dinamico, significa accede a la propiedad
console.log(objTest[abc] ) // permite el uso de variables para acceder a las propiedades del objeto
console.log(objTest.abc) // no puede utilizar variables, devuelve undefined


const newObj = {city: 'Madrid'}

const funcConObj = (obj, llave, valor) => {
  //obj.llave = valor // genera obj.llave = spain
  obj[llave] = valor // el [] en el objeto SI es dinamico
  console.log(obj)
  return obj
}

console.log(funcConObj(newObj, 'country', 'Spain'))



//loops
const newArr = []

const arr = ['pepe', 'maria', 'lola', 'matia', 'barbara']
console.log(arr)
console.table(arr)
console.log(arr.length)
//accediendo a un valor dentro del array
console.log(arr[2])
arr[3] = 'Kratos'
console.table(arr)

for (let i = 0; i < arr.length; i++){
  //bloque codigo
  console.log('pepe en loop')
  console.log('valor de i --> ',i)
  console.log('arr[i]', arr[i])
}
//for of --> extrae el VALOR de los  elementos del array
for (let name of arr) {
  console.log('for of ',name)
}

//for in --> accede a los indices

for (let i in arr){
  console.log('for in i --> ', i)
  console.log('for in arr[i] -- > ',arr[i])
  console.log(`el valor anterior de i es  ${i-1}`)
  console.log(`el valor anterior de arr[i] es  ${arr[i-1]}`)
}

const numArr = [1,2,3,3,3,3,3,4,4,5,6,7,8,9,4,5,6,1,23,3,4,68,31,984,631,98,31,8,761,89,31,987]

let count = {
  par: 0,
  impar: 0,
  divisiblesPorTres:0
}
for ( let num of numArr){
    if (num%3==0){
      count.divisiblesPorTres++
    }
  if (num%2==0){ 
    console.log(`${num} es par!!!!`)
    count.par++
  } else {
    count.impar++
  }

}
console.log(count)

const countOddEvenDivisbleByThree = (arr) =>{
  
let count = {
  par: 0,
  impar: 0,
  divisiblesPorTres:0
}
for ( let num of arr){
    if (num%3==0){
      count.divisiblesPorTres++
    }
  if (num%2==0){ 
    console.log(`${num} es par!!!!`)
    count.par++
  } else {
    count.impar++
  }

}
return count
}
const otroArr = [54,654,65,46,5,231,8,35,6,6854,1,6358,43,574,38]
console.log(countOddEvenDivisbleByThree([1,5,1,4,62,879,16,984,63,489,65,123,98,31,68,352,896,352,68,32,16,8,6568,3,24,76]))
console.log(countOddEvenDivisbleByThree(otroArr))


//DRY --> dont repeat yourself
//KISS ---> Keep it simple stupid

//camelCase --> primera letra minuscula, resto de primeras letras, mayusculas --> pepeLola, ejemploSaludo,