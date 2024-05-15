/*const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade?'))

if(idade >= 18){
    console.log('Voce eh maior de idade')
} else{
    console.log('Voce eh de menor')
} */

const prompt = require('readline-sync')

const mediaDoAluno = Number(prompt.question('Qual eh a sua media?'))

if(mediaDoAluno >= 7){
    console.log('aprovado')
} else if(mediaDoAluno < 7 && mediaDoAluno >= 5){
    console.log('esta de recuperaçao')
} else{
    console.log('reprovado')
}

//
const prompt = require('readline-sync')

const dirigir = Number(prompt.question('Qual eh a sua idade?'))
const cnh = false

if(dirigir >= 18 && cnh){
    console.log('voce pode dirigir')
} else {
    console.log('voce nao pode dirigir')
}


