let lista = [1,2,3,4,5,6,7,8,9,10]; //array com 10 elementos
console.log(lista); //imprime a lista original

let listadobrada = lista.map(elemento => elemento * 2); //multiplica cada elemento da lista por 2
console.log(listadobrada); //imprime a nova lista com os elementos dobrados

let listapar = lista.filter(elemento => elemento % 2 === 0); //filtra os elementos pares da lista
console.log(listapar); //imprime a nova lista com os elementos pares

let listadobradapar = lista.map(elemento => elemento * 2); //dobra cada elemento da lista
console.log(listadobradapar);

let listamaiorcinco = lista.filter(elemento => elemento > 5); //filtra os elementos maiores que 5
console.log(listamaiorcinco);

let listaencontrar = lista.find(elemento => elemento > 1); //encontra o primeiro elemento maior que 1
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
});


let usuarios10 = [
    { nome: "Ana", idade: 25, genero: "Feminino" },
    { nome: "Bruno", idade: 30, genero: "Masculino" },
    { nome: "Carla", idade: 22, genero:"Feminino" },
    { nome: "Daniel", idade: 28, genero: "Masculino" },
    { nome: "Eduarda", idade: 19, genero: "Feminino" },
    { nome: "Fábio", idade: 35, genero: "Masculino" },
    { nome: "Gabriela", idade: 27, genero: "Feminino" },
    { nome: "Hugo", idade: 21, genero: "Masculino" },
    { nome: "Isabela", idade: 24, genero: "Feminino" },
    { nome: "João", idade: 32, genero: "Masculino" }
];

const filtrarPorGenero = genero => usuarios10.filter(u => u.genero.toLowerCase() === genero.toLowerCase());
console.log('Feminino:', filtrarPorGenero('Feminino'));

const usuariosMasculinos = filtrarPorGenero('Masculino');
console.log('Masculino:', usuariosMasculinos);

const usuariosfemininos = filtrarPorGenero('feminino');
console.log('feminino:', usuariosfemininos);


usuariosMasculinos.forEach(u => console.log(`Nome: ${u.nome}, Idade: ${u.idade}, Gênero: ${u.genero}`));


usuariosfemininos.forEach(u => console.log(`Nome: ${u.nome}, Idade: ${u.idade}, Gênero: ${u.genero}`));











