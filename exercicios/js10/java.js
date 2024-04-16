//Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura.

//Array, Vetor ou uma Variável composta, é uma variável que tem vários elementos e cada elemento é composto por seu valor e por uma chave de identificação.

var num = [5,8,9,3]
//cada chave começa pelo 0, ou seja, o valor 5 está na chave(ou posição 0). 
num[4]= 7
num[5] = 99
num[0] = 22
num.push(66)// o num.push adiciona uma nova posição e um novo valor.
num.sort()//o num.sort() coloca em ordem crescente.


//console.log(`${num}`)
//console.log(`tem ${num.length} posiçoes`)
//console.log(`o primeiro valor é ${num[0]}`)

/*for(var pos= 0 ; pos<num.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} primeira forma de usar uma estrutura de repetição para mostrar valores.*/

//Agora a forma mais simplificada
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}