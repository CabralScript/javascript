function carregar() {
    var mensagem = window.document.getElementById ('mensagem')
    var img = window.document.getElementById ('img')
    var data = new Date()
    var hora = data.getHours()
    var minute = new Date()
    var mini = minute.getMinutes()
    var s = new Date()
    var seg = s.getSeconds()
    const intervalo = setInterval(carregar,1000)
    mensagem.innerHTML = `Agora são <em><strong>${hora}</strong>:${mini}:${seg}</em> h.`
    if (hora >= 0 && hora <12){
        
        img.src = 'bomdia.jpg'

        document.body.style.background = '#DAB889'
        
    } 
    else if (hora >= 12 && hora <= 18){
        img.src = 'boatarde.jpg'
        
        document.body.style.background = '#F3A100'
    }
    else{
        
        img.src = 'boanoite.jpg'
    
        document.body.style.background = '#1A1A18'
    }
   
   

}


