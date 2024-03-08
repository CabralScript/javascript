var agora = new Date()
var hora = agora.getHours()
console.log (`agora são exatamente ${hora} horas.`)
if (hora >= 4 && hora < 13){
    console.log ("Bom dia!")
} else if (hora >= 13 && hora <= 18){
        console.log ("Boa tarde!")
    } else if(hora >= 19 && hora <= 23){
            console.log("Boa noite!")
        }

