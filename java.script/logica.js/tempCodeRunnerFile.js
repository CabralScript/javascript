const promptSync = require("readline-sync")

var idade = Number(promptSync.question("Qual a sua idade?"))
if(idade >= 17 && idade <= 18 ) {
    
    console.log("Seja bem vindo", typeof idade)
}else{
    console.log("Voce é de menor")
   
}