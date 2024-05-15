
const prompt = require('readline-sync')

const permi = prompt.question("Qual eh a sua funcao?")

switch (permi){
  case "aluno":
    console.log('você só pode assistir as aulas');
    break;
  case "professor":
    console.log("Você pode dar aulas e acessar outros arquivos")
    break
  case "diretor":
    console.log("Você pode fazer o que quiser")
    break

  default:
    console.log("Não sei quem você é")
    

}