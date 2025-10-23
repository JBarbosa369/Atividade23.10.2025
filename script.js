let lista = [1,2,3,4,5,6,7,8,9,10]; // array de números de 1 a 10
console.log(lista); // imprime a lista original
let listadobrada = lista.map(elemento => elemento * 2); // dobra cada elemento da lista
console.log(listadobrada); // imprime a lista com os valores dobrados


let listapar = lista.filter(elemento => elemento % 2 === 0);// filtra os números pares da lista
console.log(listapar);// imprime a lista com os números pares

let listadobradapar = listapar.map(elemento => elemento * 2);// dobra cada elemento da lista de números pares
console.log(listadobradapar);// imprime a lista com os valores dobrados dos números pares 

let listamaiorcinco = lista.filter(elemento => elemento > 5);// filtra os números maiores que 5
console.log(listamaiorcinco);// imprime a lista com os números maiores que 5

let listaencontrar = lista.find(elemento => elemento > 1);//   encontra o primeiro número maior que 1
console.log(listaencontrar); // imprime o número encontrado

