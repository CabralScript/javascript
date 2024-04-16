const form = document.getElementById('form')

form.addEventListener('submit', function event(){
// Envita o envio do formulario como post

event.preventDefault();

 var n1 = parseInt(document.getElementById('numero1').value)
 var n2 = parseInt(document.getElementById('numero2').value)

 //Validando os dados (opcional)

if (isNaN(n1) || isNaN(n2)){
    alert('Por favor, digite apenas números.')
    return
}

var result = n1 * n2
var value =document.getElementById('value')
value.textContent = result

})