//funçao para verificar login

function verificarLogin(){
     //obtendo os valores dos campos de entrada
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value

     //condiçao para verificar se o nome de usuário e senha estão preenchidas

     if(username && password){
        if(username === "Davi Cabral" && password === "2006"){
            alert("Login bem-sucedido! Bem-Vindo, " + username + "!")
        } else{
            alert("Nome de usuário e senha estão incorretas. Por favor, tente novamente.")
        }
     } else{
        alert("Por favor, preencha todos os campos.")
     }
     // impedir o envio do formulário
     return false
}

// adicionar um ouvinte de evento para o formulário de login
document.getElementById('LoginForm').addEventListener('submit', verificarLogin)