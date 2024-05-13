//biblioteca npm

const promptSync = require("readline-sync")

var idade = Number(promptSync.question("Qual a sua idade?"))
if(idade >= 17 && idade <= 18 ) {
    
    promptSync.question("Seja bem vindo")
}else{
    promptSync.question("Voce é de menor")
    document.body.style.backgroundColor = 'black'
}