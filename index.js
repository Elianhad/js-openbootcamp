console.log( "Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo")
/*
Modulo 2
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const nombre= "Elian Hadad";
const edad = 35;
const desarrollador = true;
const fechaNac = new Date(1986, 11, 24)
const libroFavorito = {
  nombre: 'Las intermitencias de la muerte',
  autor: 'Saramago',
  fecha: new Date(2005),
  url: 'https://es.wikipedia.org/wiki/Las_intermitencias_de_la_muerte'
}
const listaPersonal = [nombre, edad, desarrollador, fechaNac, libroFavorito]
