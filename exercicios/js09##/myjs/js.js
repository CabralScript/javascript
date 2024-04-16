function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabu')
    if(num.value.length == ''){
        
           window.alert("Por favor, digite um número!")
    } else{
       var n = Number(num.value)
       var c = 1
       tab.innerHTML = ''
       //isso vai limpar o select e mostrar a próxima tabuada
       while(c<=10){
        var item = document.createElement('option')
        //o create vai criar os elementos do select
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        //adicionar o elemento filho que é o item
        c++
       }
    }
   
}