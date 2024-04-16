var num = [3,5,8,9]

var pos = num.indexOf(9)

num.sort()
if(pos== -1){
    console.log("Valor não encontrado")
} else{
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}