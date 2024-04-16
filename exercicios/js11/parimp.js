function todosSatis(vetor,condiçao){
    for(var i = 0; i < vetor.length; i++ ){
        if(!condiçao(vetor[i])){
            return false
        }
    }
    return true
}
const meuV = [2,4,6,8,10]
const condiçaoPar  = elemento => elemento % 2 === 0
console.log(todosSatis(meuV,condiçaoPar))