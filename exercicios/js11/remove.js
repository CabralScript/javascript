function removerElet(vetor, elemento){
    const indice = vetor.indexOf(elemento)
    if(indice !== -1)/*O operador !== verifica a desigualdade estrita, ou seja, os valores não devem ser iguais e nem do mesmo tipo.*/{
        vetor.splice(indice, 1)
        //splice -> O método splice permite adicionar, remover ou substituir elementos dentro de um array em uma posição específica.
        
    }
    return vetor
}

var meuV = [1,2,3,4,5]
console.log(removerElet(meuV, 5))