function fatorial(n){
    var fato = 1
    for(var c = n; c > 1; c--){
        fato*=c
    }
    return fato
}

console.log(fatorial(8))

//5! = 5 x 4 x 3 x 2 x 1 = 120