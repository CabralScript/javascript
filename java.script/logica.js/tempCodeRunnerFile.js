var idade = Number(window.prompt("Qual a sua idade?"))
if(idade >= 17 && idade <= 18 ) {
    
    window.alert("Seja bem vindo")
}else{
    window.alert("Voce é de menor")
    document.body.style.backgroundColor = 'black'
}