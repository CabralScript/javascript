//!\ Entrada de dados.

 const age = window.prompt("Qual sua idade?")

window.alert(`O usuário tem ${age} anos de idade`)

if(age >= 18){
    window.alert("Seja bem-vindo")
} else if(age <= 17){
    window.alert("Voce não pode entrar no site.")
    document.body.style.backgroundColor = "black"
}

//!\ Entrada de dados dentro do Node.

const prompt = require("readline-sync")

const year = prompt.question("Qual sua idade?")
const yearNumber = Number(year)
console.log(`O usuário tem ${year} anos de idade`)
console.log(typeof yearNumber)

if(year >= 18){
    console.log("Seja bem-vindo")
} else if(year <= 17){
    console.log("Voce não pode entrar no site.")
    
}