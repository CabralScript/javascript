const prompt = require("readline-sync")

const year = prompt.question("Qual sua idade?")
console.log(`O usuário tem ${year} anos de idade`)

if(year >= 18){
    window.alert("Seja bem-vindo")
} else if(year <= 17){
    window.alert("Voce não pode entrar no site.")
    document.body.style.backgroundColor = "black"
}