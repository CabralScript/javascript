function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar"
        window.alert('[ERROR!] os dados não foram preenchidos')
    } else{
        res.innerHTML = 'Contando: <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo inválido. reinicie o site.") 
        }
        if(i < f){
            //contagem crescente
          for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }  
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}

//paramos o minuto 14:22