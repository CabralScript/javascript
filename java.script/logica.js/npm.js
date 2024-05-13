//biblioteca npm 
//     +
//Coerção de tipos

const promptSync = require("readline-sync")

var idade = Number/*Conversão manual*/(promptSync.question("Qual a sua idade?"))
if(idade >= 17 && idade <= 18 ) {
    
    console.log("Seja bem vindo", typeof idade)
}else{
    console.log("Voce é de menor")
   
}

///

console.log(string(10), typeof string(10))



