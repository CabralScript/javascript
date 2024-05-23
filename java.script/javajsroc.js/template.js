// todo\ configuração geral
document.body.style.fontSize = '30px'
document.body.style.fontFamily = 'sans-serif'
// todo\ fim config
// 

// !\ Template Literals


const name = null;
const msg =  `Bem vindo, ${name ? name : 'Visitante'}`
document.body.innerHTML = JSON.stringify(msg)

// !\ Promisses -> .catch, .then -> .then (deu tudo certo.) .catch(deu tudo errado.) -> .finally (vai ser executado dando certo ou não.):

// const somaDois =  (a,b) => {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(a+b);

//         }, 2000);
//     });
// }
// somaDois(1,3)
// .then(soma =>{
//     document.body.innerHTML = soma
// })
// .catch(err =>{
//     console.log(err)
// })

// fetch('https://github.com/CabralScript')
// .then(response =>{
//     return response.json();

// })
// .then(body =>{
//     console.log(body)
// })
// .catch(err =>{
//     console.log(err)
// })

async function buscarDadosNoGit(){
    const response = await fetch ('https://github.com/CabralScript');
    const body = await response.json();

    console.log(body)
}

buscarDadosNoGit();