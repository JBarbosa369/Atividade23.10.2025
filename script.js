let lista = [1,2,3,4,5,6,7,8,9,10]; //array com 10 elementos
console.log(lista); //imprime a lista original

let listadobrada = lista.map(elemento => elemento * 2); //multiplica cada elemento da lista por 2
console.log(listadobrada); //imprime a nova lista com os elementos dobrados


let listapar = lista.filter(elemento => elemento % 2 === 0); //filtra os elementos pares da lista
console.log(listapar); //imprime a nova lista com os elementos pares

let listadobradapar = lista .map(elemento => elemento * 2); //dobra cada elemento da lista
console.log(listadobradapar);

let listamaiorcinco = lista.filter(elemento => elemento > 5);//filtra os elementos maiores que 5
console.log(listamaiorcinco);

let listaencontrar = lista.find(elemento => elemento > 1);//encontra o primeiro elemento maior que 1
console.log(listaencontrar); 

lista.forEach(elemento => { //percorre cada elemento da lista
    console.log(elemento);
});



let usuario = [ //array de objetos
    {
        nome: "Jeovana",
        idade: 20
    },

    {
        nome: "jeova",
        idade: 22 
    },

    {
        nome: "nayara",
        idade: 14
    },

    {
        nome: "alzenir",
        idade: 32
    }
];

let nomes = usuario.map(elemento => elemento.nome); //cria um novo array com os nomes dos usuarios
let idades = usuario.map(elemento => elemento.idade); // cria um novo array com as idades dos usuarios
console.log(nomes);
console.log(idades);

usuario.forEach(elemento => {
    console.log(`O nome do usuario é ${elemento.nome} e a idade é ${elemento.idade}`);
})





