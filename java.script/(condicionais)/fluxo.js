//!\ Estruturas de controles de fluxo / condicionais:

const idade = window.prompt("Digite sua idade")

if(idade >= 18){
    alert("Seja bem vindo!")
} else {
    alert("Voce é menor de idade e não pode entrar no site.")
    document.body.style.backgroundColor = "Black"
}
//
//

const prompt = require("readline-sync")

const age = Number(prompt.question("Digite sua idade: "))

if(age >= 18){
    console.log("Seja bem vindo! 😊")
} else if (age >= 17) {
    console.log("Voce tem 17 anos e é menor de idade, mas vai poder acessar outras áreas do site.")
    
} else {
    console.log("Voce não pode acessar este site.")
}
console.log(typeof age)



const prompts = require("readline-sync")
const old = Number(prompts.question("Digite sua idade: "))
const cnh = String(prompts.question("Voce tem CNH?: "))
if(old >= 18 && cnh == "sim"){
  console.log("Voce está apto para dirigir!")
}
else{
    console.log("Voce não pode dirigir")
}



