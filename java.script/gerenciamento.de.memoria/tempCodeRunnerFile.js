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