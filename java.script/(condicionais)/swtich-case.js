//todo\ swtich case

const prompt = require("readline-sync");
const permi = String(prompt.question("Qual eh a sua funcao?"));

switch (permi) {
  case "aluno":
    console.log("Voce so pode assistir as aulas.");
    break;
  case "professor":
    console.log("Voce pode dar aula e assistir as aulas.");
    break;
  case "diretor":
    console.log("Voce pode fazer tudo");
    break;
  default:
    console.log("Nao sei quem é voce.");
}
