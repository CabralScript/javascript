var nome = window.prompt('Qual é o seu nome?')
window.alert('É um prazer te conhecer, ' + nome)
var s = window.prompt('Qual é o seu salário? ' + nome) 
var r =  s
r.toLocaleString ('pt-br', {style: `currency` , currency: 'brl'})
document.write(`Seu salário é de ${r}`)
window.alert("Agora vamos para o site :)")