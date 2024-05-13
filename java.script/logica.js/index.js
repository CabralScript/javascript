//Variáveis
// ! podemos criar variáveis com VAR, LET, CONST
// var e let podem ter suas memórias alteradas, mas const NÃO!
// entre var e let, use let.
//Tem tipagem dinâmica: infere os tipos de dados
//o javascript possui tipagem fraca
//use sempre camel case -> começar uma Variável com letra minúscula e seguir com letras Maiúsculas. exemplo -> var nomeDoAluno

let nomeDoInscrito = "Davi Cabral" //Variável String(texto, Utilize sempre aspas)
let idade = 18 // variável Number
let altura = 1.83 // É number. e utilizamos "." invés de ","
let boo = true // É uma variável booleano -> true é verdadeiro
let Boo = false // falso
console.log(`O aluno ${nomeDoInscrito} tem ${idade} anos e ${altura} de altura`)
console.log(boo)
console.log(Boo)
console.log(typeof nomeDoInscrito, typeof idade, typeof altura, typeof boo, typeof Boo)

let curso = "FrontEnd", tt = "Javascript" // Você pode usar apenas um let ou var para diversas memórias
console.log(curso, tt)