function contarOC(vetor){
    const contador = {}
    for(const elemento of vetor){
        if (contador[elemento]){
            contador[elemento]++
        } else{
            contador[elemento] = 1
        }
    }
    return contador
}

const meuV =[1,2,2,3,3,3,3,4,4,4,4]
console.log(contarOC(meuV))