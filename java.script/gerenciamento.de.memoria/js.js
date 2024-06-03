// !\ Java Script Básico.

document.getElementById("aqui").innerHTML = "Hello World!";

console.log("Hello World!");

// !\ Variáveis.

let names = "Davi"; // todo\ é uma string. utilize sempre aspas.
let idade = 18;
let alturaDoNames = 1.83;
let estuda = true;
console.log(`O ${names} tem ${idade} anos e ${alturaDoNames} de altura`);

console.log(typeof names, typeof idade, typeof estuda);

//!\ variável dentro de outra variável.

let nome = "vitor",
  age = 14,
  altura = 1.62;

console.log(nome, age, altura);
console.log(`O ${nome} tem ${age} anos e tem ${altura} de altura.`);

//!\ Operadores matemáticos.
/* + Soma
    - Subtração
    * Multiplicação
    / Divisão
    % Resto
    ** Exponenciação 
    
    E utilize a biblioteca Math para fazer outros calculos matemáticos como -> raiz quadrada e logaritmo*/

const noteOne = 7;
const noteTwo = 9;
const noteTree = 10;


let resultNotes = noteOne + noteTwo + noteTree;
let mediaNotes = resultNotes / 2
console.log(resultNotes);
console.log(mediaNotes)


const number = 81
const raiz = Math.sqrt(number)
console.log(raiz)

