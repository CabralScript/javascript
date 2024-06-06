const prompt = require("readline-sync")

const age = prompt.question("Digite sua idade")

if(age >= 18){
    console.log("Seja bem vindo!")
} else {
    console.log("Voce é menor de idade e não pode entrar no site.")
    
}