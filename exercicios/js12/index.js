var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flist')
var res = document.querySelector('div#res')
var valores = []

function isValidN(n){
  var numero = Number(n)
  return numero >= 1 && numero <= 100
}

function inF(n, l){
   return l.indexOf(Number(n)) != -1
}

function add(){
  if(isValidN(num.value) && !inF(num.value, valores)){
    valores.push(Number(num.value))
    var item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item) // adicionar ao select
   res.innerHTML = ''
    num.value = ''
    num.focus()
  } else{
    window.alert("Valor inválido ou já adicionado na lista")
  }
}

function finalizar (){
  if(valores.length == 0){
    window.alert("Adicione valores antes de finalizar")
  }else{
    var tot = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0

    for(var pos in valores){
      soma += valores[pos]
      
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados. </p>`
    res.innerHTML += `<p>O maior número é ${maior} </p>`
    res.innerHTML += `<p>O menor número é ${menor} </p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma} </p>`
    res.innerHTML += `<p> A média dos valores é ${media} </p>`
  }
}
num.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    
    add()
  }
});