// !\ Nullish Coalescing Operator -> ??
document.body.style.fontSize = "30px";
document.body.style.fontFamily = "sans-serif";
const idade = 18;

document.body.innerHTML = " Sua idade é " + (idade ?? "Não informado ");


// !\ Objetos

const user = {
    name : 'Davi ' ,
    nickname: "Silva",
    age: 18 ,
    address:{
        street: " José Clement",
        number: 50,
    },
};

document.body.innerHTML = JSON.stringify(Object.entries(user));


// !\ Desestruturação

const {address, age, nickname = "Cabral"} = user
document.body.innerHTML = JSON.stringify({address, age, nickname});

// ? \ Desestruturação em funções

function mostraIdade (age){
    return age;
};
document.body.innerHTML = mostraIdade(age);


// !\ Rest Operator

const {name, ...rest} = user;
document.body.innerHTML = JSON.stringify(rest);

const arrays = [1,2,3,4,5,6,7,8,9,10];
const [...result] = arrays;
document.body.innerHTML = JSON.stringify(result);

// !\ Short Syntax

const nome = 'Vitor';
const old = 13;

const adm = {
  nome,
  old,
}
document.body.innerHTML = JSON.stringify(adm)



// !\ Optional Chaining


const chef = {
    name : 'Davi ' ,
    nickname: "Silva",
    age: 18 ,
    //  address:{
    //      street: " José Clement",
    //    number: 50,
    //    zip:{
    //     city : 'Rio',
    //     code : 6537365832, 

    //    },
    // },
    
};
document.body.innerHTML = chef.address?.zip.code ?? 'Não existe'

// !\ Métodos do array 
//*\ com map -> só usamos no caso de modificar o array:
const array = [1,2,3,4,5,6,7,8,9,10]
const novoArray =  array.map(item => {
    return item * 2;
});

document.body.innerHTML = JSON.stringify(novoArray)

//*\ com for:
// ?\ for (const i of array) {document.body.InnerText += i;}

//*\ com for each:
// ?\ array.forEach(item => {novoArray.push(item*2);})

// todo\ Métodos de array mais importantes -> map, filter, every, some, find, findIndex && reduce.

// *\ array com filter:
const arrai = [1,2,3,4,5,6,7,8,9,10]
const newArray = arrai.filter(item => item % 2 === 0)
.map(item => item * 10)
document.body.innerHTML = JSON.stringify(newArray)

// *\ array com every -> se todos forem números, retorne true. se não, retorne false:
const arrayN = [1,2,3,4,5,6,7,8,9,10]

const todosSaoNumber = arrayN.every(item => typeof item === 'number');
document.body.innerHTML = JSON.stringify(todosSaoNumber)

// *\ array com some -> pelo menos um valor não é número. E assim retornará true. -> const arrayS = [1,2,3,4,5,6,7,8,9,10, i]. Mas se o array tiver apenas números -> const arrayS = [1,2,3,4,5,6,7,8,9,10,], retornará false:
const arrayS = [1,2,3,4,5,6,7,8,9,10]
const umNaoEnumber = arrayS.some (item => {
    return typeof item != 'number';
})
document.body.innerHTML = JSON.stringify(umNaoEnumber)

// *\ array com find -> serve para encontrar o primeiro item do array que satisfaça a condição:
const arrayF = [1,2,3,4,5]
const pares = arrayF.find(item => {
    return item % 2 === 0;
});
document.body.innerHTML = JSON.stringify(pares)

// *\ array com findIndex é quase parecido com o array find. A diferença é que ele encontra o indice, ou seja, ele vai retornar o indice do primeiro número par (que é 2) e o indice dele é (1):
const arrayIDX = [1,2,3,4,5]
const newIND = arrayF.findIndex(item => {
    return item % 2 === 0;
});
document.body.innerHTML = JSON.stringify(newIND)

// *\ array com reduce -> que é "eu quero reduzir o meu array à algo."(esse "algo" pode ser qualquer coisa). E nesse exemplo vamos somar todos os números do array e retornar apenas o resultado:
const arrayR = [1,2,3,4,5,6,7,8,9,10]
const soma = arrayR.reduce((acc, item) => {
   return acc + item
}, 0)
document.body.innerHTML = JSON.stringify(soma)







