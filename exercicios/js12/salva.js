var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flist')
var res = document.querySelector('div#res')
var valores = []

function IsNaN(n){
     if(Number(n) >= 1 && Number(n) <= 100){
      return true
     } else{
      return false
     }
}

function inF(n, l){
   if(l.indexOf(Number(n)) != - 1){
    return true
   } else{
    return false

   }
}

function add(){
      if(isNaN(num.value) && !inF(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
      } else{
        window.alert(' Valor inválido ou já encontrado na lista')
      }
}