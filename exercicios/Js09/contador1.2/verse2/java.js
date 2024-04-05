function contar (){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')
    res.innerHTML = "Preparando contagem..."
    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('Não será possível realizar a contagem.')
        res.innerHTML= "Dados inválidos."
    }
    else{
        res.innerHTML = "Contando: <br>"
     var i = Number(ini.value)
     var f = Number(fim.value)
     var p = Number(pass.value)
      if (i < f){
        for(c = i; c <= f; c+= p){
            res.innerHTML += `${c} \u{1F601}`
        }
    } else{
        for( c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F601}`
        }
    } 
    }
    
   
}

