//!\ Operador Ternário

const prompt = require("readline-sync")
const idade = Number(prompt.question("Qual sua idade?"))

 const msg = idade >= 18 ? "Voce eh maior de idade." : "Voce eh de menor."

 console.log(msg)