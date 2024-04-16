function encontrarIndV(vetor,elemento){
    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] === elemento){
            return i
        } 
    }
    return -1 //posição e valor não encontrado
} 
const meuV = [10,20,30,40,50]
console.log(encontrarIndV(meuV, 40))
console.log(encontrarIndV(meuV,200))