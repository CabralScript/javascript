/*function somarEletementos (vetor){
    let soma = 0
    for(let elemento of vetor){
        soma += elemento
    }
    return soma
}

//exemplo de uso
const numeros = [10,5,2,7,1]
const soma = somarEletementos(numeros)
console.log(`A soma dos elementos é ${soma}`)

A função somarElementos recebe um vetor como parâmetro.
A variável soma é inicializada com 0 para armazenar a soma dos elementos.
O loop for...of itera sobre cada elemento do vetor.
A cada iteração, o valor do elemento é adicionado à variável soma.
A função retorna o valor final da variável soma.*/




/*function calmedia (vetor){
    var soma = 0
    for(var elemento of vetor){
        soma += elemento
    }
    const media = soma / vetor.length
    return media
}

const notas = [8,7,9,10,6]
const mediag = calmedia(notas)
console.log (`A média é ${mediag.toFixed(2)}`)*/




function encontrarMaior(vetor){
    var maior = vetor[0]
    for(var i = 1; i< vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        
    }
    return maior
}

const numeros = [5,10,400,3,7,6,8,9,777]
const maiorN = encontrarMaior(numeros)
console.log(`Maior numero é ${maiorN}`)