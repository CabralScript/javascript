const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade?'))

if(idade >= 18){
    console.log('Voce eh maior de idade')
} else{
    console.log('Voce eh de menor')
}


var n1 = 132
var n2 = 133
var n3 = 24
var result = n1 + n2 + n3
console.log(result)

var menos = result
console.log(menos - 20)